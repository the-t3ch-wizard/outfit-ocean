import { ID, Query } from 'appwrite';
import { account, appwriteConfig, avatars, databases, storage } from "./config";

export async function signupCustomerAccount(payload){
  try {
    
    const newAccount = await account.create(
      ID.unique(),
      payload.email,
      payload.password,
      payload.name,
    );
    if (!newAccount) throw Error;
    const avatarUrl = avatars.getInitials(newAccount.name);
    const newCustomer = await saveCustomerToDB({
      name: payload.name,
      email: payload.email,
      accountId: newAccount.$id,
      imageUrl: avatarUrl.href,
    });
    if (!newCustomer) throw Error;
    return newCustomer;

  } catch (error) {
    console.log(error);
  }
}

export async function saveCustomerToDB(payload){
  try {
    
    const customer = await databases.createDocument(
      appwriteConfig.databaseId,
      appwriteConfig.customerCollectionId,
      payload.accountId,
      {
        accountId: payload.accountId,
        name: payload.name,
        email: payload.email,
        imageUrl: payload.imageUrl,
      }
    );
    if (!customer) throw Error;
    return customer;

  } catch (error) {
    console.log(error);
  }
}

export async function signinCustomerAccount(payload){
  try {
    
    const session = await account.createEmailSession(
      payload.email,
      payload.password,
    );
    if (!session) throw Error;
    return session;

  } catch (error) {
    console.log(error);
  }
}

export async function signoutCustomerAccount(){
  try {
    
    const signedOut = await account.deleteSession('current');
    console.log('session', signedOut);
    return signedOut;

  } catch (error) {
    console.log(error);
  }
}

export async function getCurrentUser(){
  try {
    
    const user = await account.get();
    if (!user) throw Error;
    const avatarUrl = avatars.getInitials(user.name);
    return {
      id: user.$id,
      name: user.name,
      email: user.email,
      imageUrl: avatarUrl,
    };

  } catch (error) {
    console.log(error);
  }
}

export async function getRecentProducts(){
  try {
    
    const products = await databases.listDocuments(
      appwriteConfig.databaseId,
      appwriteConfig.productCollectionId,
      [
        Query.orderDesc("$createdAt"),
        Query.limit(20)
      ]
    )
    if (!products) throw Error;
    return products;

  } catch (error) {
    console.log(error);
  }
}

export async function getRandomProducts(){
  try {
    
    const products = await databases.listDocuments(
      appwriteConfig.databaseId,
      appwriteConfig.productCollectionId,
      [
        Query.offset(0),
        Query.limit(10)
      ]
    )
    if (!products) throw Error;
    return products;

  } catch (error) {
    console.log(error);
  }
}

export async function getProductById(payload){
  try {
    
    const product = await databases.getDocument(
      appwriteConfig.databaseId,
      appwriteConfig.productCollectionId,
      payload.id
    );
    if (!product) throw Error;
    return product;

  } catch (error) {
    console.log(error);
  }
}

export async function getProductStockById(payload){
  try {
    
    const product = await databases.getDocument(
      appwriteConfig.databaseId,
      appwriteConfig.productCollectionId,
      payload.id
    );
    if (!product) throw Error;
    return product.stock;

  } catch (error) {
    console.log(error);
  }
}

export async function buyNowProduct(payload){
  try {
    let orderPlaced = 0;
    const user = await account.get();
    if (!user) throw Error;
    for (let i=0; i<payload.length; i++){
      if (payload[i].quantity > payload[i].stock) continue;
      const order = await databases.createDocument(
        appwriteConfig.databaseId,
        appwriteConfig.orderCollectionId,
        ID.unique(),
        {
          productId: payload[i].id,
          productTitle: payload[i].title,
          customerId: user.$id,
          quantity: payload[i].quantity,
          price: payload[i].price
        }
      )
      if (!order) throw Error;
      const newStock = payload[i].stock-payload[i].quantity;
      const updatedProduct = await databases.updateDocument(
        appwriteConfig.databaseId,
        appwriteConfig.productCollectionId,
        payload[i].id,
        {
          stock: newStock
        }
      )
      if (!updatedProduct) throw Error;
      orderPlaced++;
    }
    return orderPlaced;
  } catch (error) {
    console.log(error);
  }
}

export async function getRecentOrders(){
  try {
    
    const user = await account.get();
    const orders = await databases.listDocuments(
      appwriteConfig.databaseId,
      appwriteConfig.orderCollectionId,
      [
        Query.equal('customerId', user.$id)
      ]
    )
    // console.log('orders', orders);
    if (!orders) throw Error;
    return orders.documents;

  } catch (error) {
    console.log(error);
  }
}