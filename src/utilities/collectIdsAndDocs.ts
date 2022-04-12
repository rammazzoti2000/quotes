export const collectIdsAndDocs = (doc: any) => ({
  id: doc.id,
  ...doc.data()
});
