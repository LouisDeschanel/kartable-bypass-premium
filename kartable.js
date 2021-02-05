if( document.readyState !== 'loading' ) {
    console.log('ui');
    removeBlur();
} else {
    console.log('no');
    document.addEventListener('DOMContentLoaded', removeBlur());
}


function removeBlur() {
    console.log('yo');
    var toRemove = document.getElementsByTagName('push-more-content');
    for (i = 0; i < toRemove.length; i++) {
        toRemove[i].remove();
    };

    var toRemove = document.getElementsByTagName('kartable-modal-container');
    for (i = 0; i < toRemove.length; i++) {
        toRemove[i].remove();
    };
};