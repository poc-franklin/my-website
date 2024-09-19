import {
  createOptimizedPicture,
  decorateIcons,
  fetchPlaceholders,
} from '../../scripts/aem.js';

export default async function decorate(block) {
  getApiCall(block);
}

async function getApiCall(block) {
  const response = await fetch('https://localhost:8443/bin/readnode').then(res => res.clone().json())
  block.append(JSON.stringify(response));
  console.log('response');
  const closeButton = document.createElement('button');
  closeButton.classList.add('close-button');
  closeButton.setAttribute('aria-label', 'Close');
  closeButton.type = 'button';
  closeButton.innerHTML = '<span class="icon icon-close"></span>';
  closeButton.addEventListener('click', () => dialog.close());
  dialog.prepend(closeButton);
  if (response.ok) {
    // Get JSON value from the response body
    return response.json();
  }
}