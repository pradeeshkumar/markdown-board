
export function getAllMarkerKeysFromStorage(inDocumentID) {

  const markerKeys = [ ];
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    console.log(`getAllMarkersFromStorage(): key=${key}`);
    // If this marker belongs to this document then add it to our markers object.
    if (key.startsWith(inDocumentID)) {
      markerKeys.push(key);
    }
  }
  console.log("getAllMarkersFromStorage(): markerKeys", markerKeys);
  return markerKeys;

} /* End getAllMarkerKeysFromStorage(). */


/**
 * Gets a specific marker from storage.
 *
 * @param  inKey The key of the marker.
 * @return       An object with all marker data.
 */
export function getMarkerFromStorage(inKey) {

  return JSON.parse(localStorage.getItem(inKey));

} /* End getMarkerFromStorage(). */


/**
 * Saves a marker to storage.
 *
 * @param inKey    The key of the marker.
 * @param inMarker An object containing all marker data.
 */
export function saveMarkerToStorage(inKey, inMarker) {

  localStorage.setItem(inKey, JSON.stringify(inMarker));

} /* End saveMarker */