function replaceIcon (newIcons, oldIcons ) {
  for(let i = 0; i<oldIcons.length; i++){
    oldIcons[i].src = `${newIcons[i]}`
  }
}
export default replaceIcon;
