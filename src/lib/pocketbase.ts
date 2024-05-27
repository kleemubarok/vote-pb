import { browser } from "$app/environment";
// import { PB_URL } from "$env/static/private";
import PocketBase from "pocketbase";
import { writable } from "svelte/store";

export const pb = writable<PocketBase | undefined>(undefined, (set) => {
  // We do not need pb store for server
  if (!browser) {
    return;
  }

  const pbInstance = new PocketBase("https://pb.oil.my.id");

  pbInstance.authStore.loadFromCookie(document.cookie);

  // console.log(pbInstance.authStore);

  pbInstance

    .collection("users")
    .authRefresh()
    .finally(() => {
      set(pbInstance);
    });
});