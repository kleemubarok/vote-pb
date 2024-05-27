import { fail, redirect } from "@sveltejs/kit";
import type { EmojiDocument } from "./types.js";


export const load = async ({ locals }) => {
  if (!locals.pocketBase.authStore.isValid) {
    throw redirect(303, "auth/login");
  }

  const userID = await locals.pocketBase.authStore.model?.id;
  const userName = await locals.pocketBase.authStore.model?.name;
  // console.log(`user: ${user}`)

  const emojis = await locals.pocketBase
    .collection("emojis")
    .getFullList<EmojiDocument>();

  return {
    emojis,
    userID,
    userName
  };
};

export const actions = {
   default: async ({ locals, request }) => {
    if (!locals.pocketBase.authStore.isValid) {
      throw redirect(303, "/auth/create-account");
    }

    const formData = await request.formData();

    const emojiId = formData.get("emoji-id");

    if (typeof emojiId !== "string") {
      return fail(400);
    }

    console.log(`Model id:${locals.pocketBase.authStore.model?.id}`);

    const emoji = await locals.pocketBaseAdmin
      .collection("emojis")
      .getOne<EmojiDocument>(emojiId);

    console.log(`Emoji:${emoji}`);
  

    if (emoji.votes.includes(locals.pocketBase.authStore.model?.id)) {
      console.log(`"vote--"`);
      await locals.pocketBaseAdmin.collection("emojis").update(emojiId, {
        "votes-": locals.pocketBase.authStore.model?.id,
      });
    } else {

      console.log(`"vote++"`);

      await locals.pocketBaseAdmin.collection("emojis").update(emojiId, {
        "votes+": locals.pocketBase.authStore.model?.id,
      });
    }
  },
};
