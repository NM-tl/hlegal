document.addEventListener('DOMContentLoaded', function () {
    const tabs = document.querySelectorAll('.tab-button');
    const tabContents = document.querySelectorAll('.tab-content');
  
    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        tabs.forEach(item => {
          item.classList.toggle('bg-redText', item === tab);
          item.classList.toggle('text-transparent', item === tab);
          item.classList.toggle('bg-clip-text', item === tab);
          item.classList.toggle('text-grey20-bg', item !== tab);
        });
        tabContents.forEach(content => content.classList.toggle('hidden', content.id !== tab.dataset.tab));
      });
    });
  });
  