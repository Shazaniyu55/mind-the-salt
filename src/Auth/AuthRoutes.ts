'use client'
import { signIn, signOut } from "next-auth/react"
import toast from "react-hot-toast"

async function deleteAllIndexedDBDatabases() {
    // Get the list of all databases
    if (!('databases' in indexedDB)) {
        console.error('indexedDB.databases() is not supported in this browser.');
        return;
    }

    try {
        const databases = await indexedDB.databases();

        for (const db of databases) {
            await new Promise((resolve, reject) => {
                const request = indexedDB.deleteDatabase(db.name as string);

                request.onsuccess = () => {
                    console.log(`Deleted database: ${db.name}`);
                    resolve('deleted');
                };

                request.onerror = (event) => {
                    console.error(`Error deleting database: ${db.name}`, event);
                    reject(event);
                };

                request.onblocked = () => {
                    console.warn(`Database deletion blocked: ${db.name}`);
                };
            });
        }

        console.log('All IndexedDB databases have been deleted.');
    } catch (error) {
        console.error('Error deleting IndexedDB databases:', error);
    }
}




export const Login=()=>{

signIn(undefined,{callBackUrl:'/dashboard'})
}
export const LogOut=async (callBack?:any)=>{
    // const url:string="/api/auth/logout"
    toast.loading("Signing you out...")
    if(typeof window!='undefined'){
window.localStorage.clear();
console.log("calling deleteallIndexDB")
 deleteAllIndexedDBDatabases();

if(callBack)await callBack();

}
else{
    console.log("window is undefined")
}

    signOut({callbackUrl:'/'});
    console.log("signout called...")
   
}