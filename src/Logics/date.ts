import {storage } from "@/firebase.config";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import moment from "moment";
import * as XLSX from 'xlsx';
// const crypto = require('crypto');

import { getStorage,  updateMetadata } from "firebase/storage";

export const Months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];
  
  export const Years = (() => {
    const currentYear = new Date().getFullYear();
    const maxYear = currentYear + 27; // Complete up to the year 2050
    const yearsArray:string[] = [];
  
    for (let year = currentYear; year <= maxYear; year++) {
      yearsArray.push(year.toString());
    }
  
    return yearsArray;
  })();
  
  export const getPassedYears = (): string[] => {
    const currentYear:number =Number(new Date().getFullYear());
    const yearsArray:string[] = [];
  
    for (let i:number = 0; i < 10; i++) {
      yearsArray.push((currentYear - i).toString());
    }
  
    return yearsArray;
  };
  
  export const getPassedMonths = (): string[] => {
    const currentMonthIndex = new Date().getMonth();
    const months = [
      "January", "February", "March", "April", "May", "June", "July", "August",
      "September", "October", "November", "December"
    ];
  
    return months.slice(0, currentMonthIndex);
  };
  
  export const getRemainingMonths = (): string[] => {
    const currentMonthIndex = new Date().getMonth();
    const months = [
      "January", "February", "March", "April", "May", "June", "July", "August",
      "September", "October", "November", "December"
    ];
  
    return months.slice(currentMonthIndex,months.length);
  };

  export const getCurrentMonthName = (): string => {
    const currentMonthIndex = new Date().getMonth();
    const months = [
      "January", "February", "March", "April", "May", "June", "July", "August",
      "September", "October", "November", "December"
    ];
  
    return months[currentMonthIndex];
  };
  
  export const getCurrentMonthsToEndOfYear = (): string[] => {
    const currentMonthIndex = new Date().getMonth();
    const months = [
      "January", "February", "March", "April", "May", "June", "July", "August",
      "September", "October", "November", "December"
    ];
  
    return months.slice(currentMonthIndex);
  };
  export const getMonthNumber = (monthName: string): number | null => {
    const months = [
      "January", "February", "March", "April", "May", "June", "July", "August",
      "September", "October", "November", "December"
    ];
  
    const monthIndex = months.findIndex((month) => month.toLowerCase() === monthName.toLowerCase());
  
    // Return null if the input month name is invalid
    if (monthIndex === -1) {
      return null;
    }
  
    // Return month number (1 to 12) based on the index + 1
    return monthIndex + 1;
  };
  


  export const generateUniqueString=(length:number)=>{ const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const charactersLength = characters.length;
  let uniqueString = '';

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * charactersLength);
    uniqueString += characters.charAt(randomIndex);
  }

  return uniqueString;
  }
  let timeoutID:any=0;
export const fireAfterStop = (callBack:any,ms:number)=>{
if(timeoutID)clearTimeout(timeoutID);
timeoutID=setTimeout(()=>{
callBack()
},ms);

}

let timeoutIDClick: any = 0;
export const fireAfterStopClick = (callback: any, ms: number) => {
  clearTimeout(timeoutIDClick);

  const handleMouseDown = () => {
    timeoutIDClick = setTimeout(() => {
      callback();
    }, ms);
  };

  const handleMouseUp = () => {
    clearTimeout(timeoutIDClick);
  };

  return {
    onMouseDown: handleMouseDown,
    onMouseUp: handleMouseUp,
  };
};

export function getMonthNameFromDate(dateString: string): string {
  //if(typeof dateString=="object")dateString=dateString[0];
  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const date = new Date(dateString);
  const monthIndex = date.getMonth();

  return months[monthIndex];
}

export function getYearFromDate(dateString: string): number {
  if(typeof dateString=="object")dateString=dateString[0];
  const date = new Date(dateString);
  console.log(date);
  return date.getFullYear();
}
export function calculateSMSCharges(message:string,charactersPerPage:number=70){
  return Math.ceil(message.length/charactersPerPage);
}

export function getTimeAgoString(dateString: string): string {
  const now = moment();
  const targetDate =  moment(dateString);
  const diffInSeconds = now.diff(targetDate, 'seconds');

  if (diffInSeconds < 60) {
    return `${diffInSeconds}s ago`;
  } else if (diffInSeconds < 3600) {
    const minutes = Math.floor(diffInSeconds / 60);
    return `${minutes}m ago`;
  } else if (diffInSeconds < 86400) {
    const hours = Math.floor(diffInSeconds / 3600);
    return `${hours}h ago`;
  } else {
    const days = Math.floor(diffInSeconds / 86400);
    return `${days}d ago`;
  }
}

export function getGreeting(): string {
  const currentHour = new Date().getHours();

  if (currentHour >= 0 && currentHour < 12) {
    return "Good morning";
  } else if (currentHour >= 12 && currentHour < 18) {
    return "Good afternoon";
  } else {
    return "Good evening";
  }
}
export function formatToNaira(value: string | number, showSymbol: boolean = true): string {
  if (typeof value === 'string') {
    const numericValue = parseFloat(value.replace(/[^0-9.-]+/g, ""));
    if (isNaN(numericValue)) {
      return showSymbol ? '₦0.00' : '0.00';
    }
    return showSymbol ? numericValue.toLocaleString('en-NG', { style: 'currency', currency: 'NGN', currencyDisplay: 'symbol' }) : numericValue.toLocaleString();
  } else if (typeof value === 'number') {
    return showSymbol ? value.toLocaleString('en-NG', { style: 'currency', currency: 'NGN', currencyDisplay: 'symbol' }) : value.toLocaleString();
  } else {
    return showSymbol ? '₦0.00' : '0.00';
  }
}


export const shareReferralLink = async (referralLink:string) => {
  try {
    // Check if the Web Share API is supported
    if (navigator.share) {
      await navigator.share({
        title: 'Check out swiftkonet!',
        text: 'Join and buy airtime , data and electricity bills effortlessly!',
        url: referralLink,
      });
      console.log('Successfully shared referral link.');
    } else {
      console.log('Web Share API not supported.');
    }
  } catch (error) {
    console.error('Error sharing referral link:', error);
  }
};

// Example usage:
export const validateNigerianAccountNumber=(accountNumber:string | number)=> {
  // Remove any whitespace from the account number
  if(typeof accountNumber=="number")accountNumber=accountNumber.toString();
  const cleanAccountNumber = accountNumber.replace(/\s/g, '');

  // Check if the account number is numeric and has the correct length (10 digits)
  const isValidLength = /^\d{10}$/.test(cleanAccountNumber);

  if (!isValidLength) {
    return false;
  }

  // Perform additional checks if needed based on the specific bank's account number format

  // Add your specific bank validation logic here if necessary

  // If no additional checks are needed, consider the account number as valid
  return true;
}


export const redirectToWhatsApp=(phoneNumber:string |  number, message:string)=>{
  // Format the phone number by removing non-numeric characters
  const formattedPhoneNumber = phoneNumber.toString().replace(/\D/g, '');
  // Create the WhatsApp URL with the formatted phone number and optional message
  const whatsappURL = `https://wa.me/${formattedPhoneNumber}${message ? `?text=${encodeURIComponent(message)}` : ''}`;
  // Redirect to the WhatsApp URL
  window.location.href = whatsappURL;
}


export const getCurrentDateString=()=>{
  const options:any = {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    hour12: true,
  };

  const formattedDate = new Intl.DateTimeFormat('en-US', options).format(new Date());

  const dayWithSuffix = addDaySuffix(formattedDate);

  return `${dayWithSuffix}`;
}

const addDaySuffix=(dateString:string)=>{
  const dayWithoutSuffix = dateString.replace(/\d+(st|nd|rd|th)/, '');
  const day = parseInt(dayWithoutSuffix, 10);

  let suffix = 'th';
  if (day === 1 || day === 21 || day === 31) {
    suffix = 'st';
  } else if (day === 2 || day === 22) {
    suffix = 'nd';
  } else if (day === 3 || day === 23) {
    suffix = 'rd';
  }

  return dateString.replace(/\d+(st|nd|rd|th)/, `${day}${suffix}`);
}

export const replaceProtocol=(link:string)=>{
  // Check if the link starts with // and replace it with https://
  if (link.startsWith('//')) {
    return `https:${link}`;
  }

  // If the link doesn't start with //, return it as is
  return link;
}


export const CopyText= async (textToCopy:string) => {
  try {
    // Use the Clipboard API to write text to the clipboard
    const a=await navigator.clipboard.writeText(textToCopy);
  return a;
  } catch (error) {
 return false;
  }
};


export const convertToCamelCase=(inputString:string)=>{
  // Split the input string into words
  const words = inputString.split(' ');
  // Capitalize the first letter of each word (except the first word)
  const camelCaseWords = words.map((word:string, index:number) => {
    if (index === 0) {
      return word.toLowerCase(); // Lowercase the first word
    } else {
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    }
  });
// Join the words to create the camelCase string
  const camelCaseString = camelCaseWords.join('');
  return camelCaseString;
}

export const removeChar = (inputString: string, charToRemove: string): string => {
  // Use regular expression to replace all occurrences of the specified character
  const regex = new RegExp(charToRemove, 'g');
  return inputString.replace(regex, '');
};


export function getCurrentDateTime() {
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  const currentDate = new Date();
  const month = months[currentDate.getMonth()];
  const day = currentDate.getDate();
  const year = currentDate.getFullYear();
  const formattedDateTime = `${month} ${day} ${year}`;
  return formattedDateTime;
}

export function spaceToCamelCase(str: string): string {
  // Split the string by spaces
  const words: string[] = str.split(' ');

  // Capitalize the first letter of each word
  const camelCaseWords: string[] = words.map((word, index) => {
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  });

  // Join the words and return the camelCase string
  return camelCaseWords.join('');
}
export function camelCaseToSpace(str: string): string {
  // Split the camelCase string into words
  const words: string[] = str.split(/(?=[A-Z])/);

  // Capitalize the first letter of each word
  const capitalizedWords: string[] = words.map(word => {
      // Capitalize the first letter of each word and convert the rest to lowercase
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  });

  // Join the words with spaces
  return capitalizedWords.join(' ');
}


export function truncateString(text:string, maxLength:number) {
    if (text.length > maxLength) {
        return text.slice(0, maxLength - 3) + "...";
    } else {
        return text;
    }
}

export function downloadFileFromDataURL(dataURL:string, filename:string, fileExtension:string){
  // Create a temporary anchor element
  const anchor = document.createElement('a');
  anchor.href = dataURL;
  anchor.download = `${filename}.${fileExtension}`;

  // Programmatically trigger a click event on the anchor element
  const clickEvent = new MouseEvent('click', {
      view: window,
      bubbles: true,
      cancelable: true
  });
  anchor.dispatchEvent(clickEvent);
}


export function dataURLToBlob(dataURL:string) {
  // Split the data URL string into two parts: metadata and base64-encoded data
  const parts = dataURL.split(',');
  const metadata = parts[0]; // e.g., "data:image/jpeg;base64"
  const base64Data = atob(parts[1]); // Decode base64-encoded data

  // Create a Uint8Array from the base64-decoded data
  const arrayBuffer = new ArrayBuffer(base64Data.length);
  const uint8Array = new Uint8Array(arrayBuffer);
  for (let i = 0; i < base64Data.length; i++) {
      uint8Array[i] = base64Data.charCodeAt(i);
  }

  // Create a Blob object from the Uint8Array and metadata
  return new Blob([uint8Array], { type: metadata });
}


export function emptyObjectValues(obj:  any): any {
    const newObj: Record<string, any> = {};
    for (const key in obj) {
        newObj[key] = '';
    }
    return newObj;
}
export const convertToExcelDataURL = async (data:any,extension:string) => {
  const ws = XLSX.utils.json_to_sheet(data);
  const wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
  const excelBuffer = XLSX.write(wb, { type: 'array', bookType: extension as XLSX.BookType });
  const blob = new Blob([excelBuffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });

  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      const dataURL = reader.result;
      resolve(dataURL);
    };
    reader.onerror = reject;
    reader.readAsDataURL(blob);
  });
};

export const getCurrentDay = () => {
  const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const currentDate = new Date();
  const currentDayIndex = currentDate.getDay();
  const currentDay = daysOfWeek[currentDayIndex];
  return currentDay;
};




export function removeDuplicatesByDate(objects: any[]) {
  // Create an empty array to store unique objects
  const uniqueObjects: any[] = [];

  // Create a Set to keep track of unique 'addedAt' values
  const uniqueAddedAtSet = new Set();

  // Iterate over the objects array
  objects.forEach((obj) => {
    // Extract the 'addedAt' property value

    // Check if the uniqueAddedAtSet already has this 'addedAt' value
    if (!uniqueAddedAtSet.has(obj.assetName      )) {
      // If not, add the object to the uniqueObjects array
      uniqueObjects.push(obj);

      // Add the 'addedAt' value to the uniqueAddedAtSet
      uniqueAddedAtSet.add(obj.assetName        );
    }
  });

  return uniqueObjects;
}

export function sortObjectsByDate(objects:any) {
  // Sort the objects based on the updatedAt and addedAt properties
  objects.sort((a:any, b:any) => {
      // Convert updatedAt strings to Date objects for comparison
      const dateA:any = new Date(a.updatedAt || a.addedAt);
      const dateB:any = new Date(b.updatedAt || b.addedAt);

      // Sort by descending order of date (recently updated/added first)
      return dateB - dateA;
  });
  return objects;
}


export function sortObjectsByAddedAt(objects:any) {
  // Sort the objects based on the updatedAt and addedAt properties
  objects=removeDuplicatesByDate(objects);
  objects.sort((a:any, b:any) => {
      // Convert updatedAt strings to Date objects for comparison
      const dateA:any = new Date(a.addedAt);
      const dateB:any = new Date(b.addedAt);

      // Sort by descending order of date (recently updated/added first)
      return dateB - dateA;
  });

  return objects;
}

export function sortByAddedAt(objects:any) {
  // Sort the objects based on the updatedAt and addedAt properties
  objects.sort((a:any, b:any) => {
      // Convert updatedAt strings to Date objects for comparison
      const dateA:any = new Date(a.addedAt);
      const dateB:any = new Date(b.addedAt);

      // Sort by descending order of date (recently updated/added first)
      return dateB - dateA;
  });

  return objects;
}
export function fetchActivitiesForRecordId_7Days(activities:any, recordId:string) {
  // Get the current date
  const currentDate = new Date();

  // Calculate the date 7 days ago
  const sevenDaysAgo = new Date(currentDate.getTime() - 7 * 24 * 60 * 60 * 1000);

  // Filter activities based on the recordId and date range
  const filteredActivities = activities.filter((activity:any) => {
      // Convert activity date string to Date object
      const activityDate = new Date(activity.date);

      // Check if the activity's recordId matches the input recordId
      // and the activity date is within the past 7 days
      return activity.recordId === recordId && activityDate >= sevenDaysAgo;
  });

  return filteredActivities;
}

export function fetchActivitiesFor_7Days(activities:any) {
  // Get the current date
  const currentDate = new Date();

  // Calculate the date 7 days ago
  const sevenDaysAgo = new Date(currentDate.getTime() - 7 * 24 * 60 * 60 * 1000);

  // Filter activities based on the recordId and date range
  const filteredActivities = activities.filter((activity:any) => {
      // Convert activity date string to Date object
      const activityDate = new Date(activity.date);

      // Check if the activity's recordId matches the input recordId
      // and the activity date is within the past 7 days
      return activityDate >= sevenDaysAgo;
  });

  return filteredActivities;
}

export function formatDate(dateString: string): string {
  // Parse the date string using Moment.js
  const date = moment(dateString, 'YYYY-MM-DD HH:mm:ss');

  // Format the date to the desired format
  const formattedDate = date.format('DD MMMM YYYY');

  return formattedDate;
}

export function getPrevious7DaysActivities(activities:any) {
  const today = moment();
  const prevStartDate = today.clone().subtract(7, 'days').startOf('day');
  const prevEndDate = today.clone().endOf('day');

  // Filter activities for the previous 14 days
  const prev7DaysActivities = activities.filter((activity:any) => {
      const activityDate = moment(activity.date);
      return activityDate.isBetween(prevStartDate, prevEndDate, null, '[]');
  });

  return prev7DaysActivities;
}
export function getPrevious4WeeksActivities(activities:any) {
  const today = moment();
  const prevStartDate = today.clone().subtract(4, 'weeks').startOf('week').startOf('day');
  const prevEndDate = today.clone().endOf('week').endOf('day');

  // Filter activities for the previous 4 weeks
  const prev4WeeksActivities = activities.filter((activity:any) => {
      const activityDate = moment(activity.date);
      return activityDate.isBetween(prevStartDate, prevEndDate, null, '[]');
  });

  return prev4WeeksActivities;
}
export function getObjectByDay(activities:any, targetDay:string) {
  // Find the object with the matching day
  const foundObject = (activities||[]).find((activity:any) => activity.day.toLowerCase() === targetDay.toLowerCase());

  // If the object is found, return it; otherwise, return null
  return foundObject || null;
}
export function getPrevious12MonthsActivities(activities:any) {
  const today = moment();
  const prevStartDate = today.clone().subtract(12, 'months').startOf('month').startOf('day');
  const prevEndDate = today.clone().endOf('month').endOf('day');

  // Filter activities for the previous 12 months
  const prev12MonthsActivities = activities.filter((activity:any) => {
      const activityDate = moment(activity.date);
      return activityDate.isBetween(prevStartDate, prevEndDate, null, '[]');
  });

  return prev12MonthsActivities;
}

export function getPreviousWeekActivities(activities:any,type:string) {
   
    let prevWeekActivities;
    
    if(type.toLowerCase()==='daily'){
    prevWeekActivities= getPrevious7DaysActivities(activities)
    }
    if(type.toLowerCase()==='weekly'){
      prevWeekActivities= getPrevious4WeeksActivities(activities)
    }
    if(type.toLowerCase()==='monthly'){
      prevWeekActivities=getPrevious12MonthsActivities(activities);
    }
    if(!prevWeekActivities){
      return console.error(prevWeekActivities);
    }
    // Merge activities for each day and sum the numberOfActivities
    const mergedActivities:any = {};
    prevWeekActivities.forEach((activity:any) => {
        const day = moment(activity.date).format('dddd');
        if (!mergedActivities[day]) {
            mergedActivities[day] = {
                date: moment(activity.date).format('YYYY-MM-DD'),
                day: day,
                numberOfActivities: activity.numberOfActivities
            };
        } else {
            mergedActivities[day].numberOfActivities += activity.numberOfActivities;
        }
    });
    // Convert mergedActivities object to array
    const result = Object.values(mergedActivities);
    return result;
}

export function random(min:number, max:number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
export function getDivision(n: number, length: number): number {
  return Math.floor(length / n);
}

export function getBreakPoints(n: number, length: number): number[] {
  const breakPoints: number[] = [];
  for (let i = n; i <= length; i += n) {
    breakPoints.push(i);
  }
  return breakPoints;
}

export interface UploadCallBackProps{
  success:(url:string)=>void;
  error:(error:any)=>void;
  start?:(data:string)=>void;
  finish?:(data:string)=>void;
}

export const uploadToFirebase = async (file: File, callbacks: UploadCallBackProps,fileType?:string) => {
  // Check if the file is an image
  const validImageTypes = ['image/gif', 'image/jpeg', 'image/png', 'image/webp'];
   if (!validImageTypes.includes(fileType || file.type)) {
     callbacks.error(new Error('File is not a valid image'));
     return;
   }

  // Generate unique image name
  const imageName = generateUniqueString(10);
  const imageRef = ref(storage, 'images/' + imageName);

  try {
    // Upload the file
    await uploadBytes(imageRef, file);

    // Update metadata with the correct MIME type
    const metadata = {
      contentType: fileType,
    };
    await updateMetadata(imageRef, metadata);

    // Get the download URL
    const url: string = await getDownloadURL(imageRef);
    callbacks.success(url);
  } catch (error: any) {
    callbacks.error(error);
  }
};


const updateImageMetadata = async (filePath: string, newContentType: string) => {
  const fileRef = ref(storage, filePath);

  // Create file metadata including the new MIME type
  const newMetadata = {
    contentType: newContentType,
  };

  try {
    await updateMetadata(fileRef, newMetadata);
    console.log('Metadata updated successfully');
  } catch (error) {
    console.error('Error updating metadata', error);
  }
};



export const setSessionStorageItem = (key: string, value: string) => {
  sessionStorage.setItem(key, value);
  const event = new Event('sessionStorageChange');
  window.dispatchEvent(event);
};

export const getSessionStorageItem = (key: string) => {
  return sessionStorage.getItem(key);
};
export const closeAllMDBModal = ()=>{
  
  const modals = document.querySelectorAll('.modal-backdrop') as NodeListOf<HTMLDivElement>;
  modals.forEach(modal => {
   if(modal)modal.click();
  });
}

export const calculateReadingTime = (text:string, wordsPerMinute:number = 200) => {
  // Remove HTML tags and extra white spaces
  const cleanText = text.replace(/<[^>]+>/g, '').trim();

  // Split the text into words by spaces
  const words = cleanText.split(" ");

  // Calculate the reading time in minutes
  const readingTimeMinutes = words.length / wordsPerMinute;

  // Round up to the nearest whole number
  const readingTime = Math.ceil(readingTimeMinutes);

  return readingTime;
};


export const delay = (ms: number) => {
    return new Promise(resolve => setTimeout(resolve, ms));
};
export const isNetworkError = (error: any) => {
    // Example: Check if the error message contains a specific keyword indicating network error
    return error?.message?.toLowerCase().includes("network");
}
export const isOnline = () => {
  return navigator.onLine; // Check if the browser reports online status
};
export const DayAndMonth=(date_time:string)=>{
const formattedDate = moment(date_time).format('D/M');
return formattedDate;
}
export function checkDatabaseExists(dbName:string) {
  return new Promise((resolve, reject) => {
    // Attempt to open the database with version 1
    const request = indexedDB.open(dbName, 1);

    request.onupgradeneeded = (event) => {
      // This event means the database does not exist and is being created
      const db = (event?.target as any).result;
      db.close();
      indexedDB.deleteDatabase(dbName); // Clean up the created database
      resolve(false); // Database does not exist
    };

    request.onsuccess = (event) => {
      const db = (event.target as any).result;
      db.close();
      resolve(true); // Database exists
    };

    request.onerror = (event) => {
      reject(new Error(`Error opening database: ${(event.target as any).error}`));
    };
  });
}


export function checkObjectStoreExists(dbName:string, storeName:string) {
  return new Promise((resolve, reject) => {
    // Attempt to open the database
    const request = indexedDB.open(dbName);

    request.onsuccess = (event) => {
      const db = (event.target as IDBOpenDBRequest).result;
      
      // Check if the object store exists
      if (db.objectStoreNames.contains(storeName)) {
        db.close();
        resolve(true); // Object store exists
      } else {
        db.close();
        resolve(false); // Object store does not exist
      }
    };

    request.onerror = (event) => {
      reject(new Error(`Error opening database: ${(event.target as IDBOpenDBRequest).error}`));
    };
  });
}
export function getDayOfWeek(dateString:string) {
  const date = new Date(dateString);
  const options:any = { weekday: 'long' };
  return date.toLocaleDateString('en-US', options);
}

export function isValidJSON(str:string) {
  try {
    JSON.parse(str);
    return true;
  } catch (e) {
    return false;
  }
}

export function transformFirebaseUser(user:any) {
  const getCurrentTimestamp = () => Math.floor(Date.now() / 1000);

  return {
      email: user.email || "",
      email_verified: user.emailVerified || false,
      name: user.displayName || user.email ||"User",
      nickname: user.displayName || "",
      picture: user.photoURL || "/images/user.png",
      sid: user.uid || "",
      sub: user.uid || "",
      updated_at: getCurrentTimestamp(),
      given_name: "",  // Firebase doesn't provide given_name and family_name by default
      family_name: "", // You'll need to get these values from elsewhere if needed
      locale: ""      // Firebase doesn't provide locale by default
  };
}
