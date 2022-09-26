import { store } from "../store/store";
import { setUserState } from "../store/User/UserSlicer";


export async function fetchData() {
    const response = await fetch("https://randomuser.me/api/?results=1");
    
    const user = await response.json();        
    console.log('### Response',user.results[0]);
    store.dispatch( setUserState(user.results[0])  )
  }

export default fetchData

