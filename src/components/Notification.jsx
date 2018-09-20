function moveNotification(newShelf) {
   // Show notification for moving or removing book
   newShelf !== 'none'
   ? window.Materialize.toast(`Moved to "${newShelf}"`, 10000)  // Move book
      : window.Materialize.toast(`Removed from library`, 10000) // Remove book
}

function errorNotification() {
   // Show notification for failed API request
   window.Materialize.toast('Connection Error', 10000)
}

function addNotification(newShelf) {
   // Show notification for adding a book from query
   window.Materialize.toast(`<span data-uk-icon="check"></span> Added to "${newShelf}"`, 10000)
}


export { moveNotification, errorNotification, addNotification };
