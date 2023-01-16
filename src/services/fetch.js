import { client, checkError } from './client.js';

export async function getItems() {
  const res = await client
    .from('reducer')
    .select(`
      *
`)
    .order('created_at', { ascending: false })
  ;
  return checkError(res);
}

export async function getItem(itemId) {
  const res = await client
    .from('reducer')
    .select(`
      *
`)
    .match({ id: itemId })
    .single()
  ;
  return checkError(res);
}

export async function createItem(user_id, newItem) {
  const res = await client
    .from('reducer')
    .insert({
      ...newItem,
      user_id
    })
  ;
  return checkError(res);
}

export async function updateItem(itemId, newItemBody) {
  const res = await client
    .from('reducer')
    .update({
      newItemBody
    })
    .eq('id', itemId)
  ;
  return checkError(res);
}

export async function deleteItem(itemId) {
  const res = await client
    .from('reducer')
    .delete()
    .eq('id', itemId)
  ;
  return checkError(res);
}
