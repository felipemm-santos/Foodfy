const links = document.querySelectorAll('.card .description a');

for (let linkIndex = 0; linkIndex < links.length; linkIndex++) {
  const link = links[linkIndex]

  link.addEventListener('click', () => {
    window.location.href = `/admin/recipes/${linkIndex}`;    
  });  
}
