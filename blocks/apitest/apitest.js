import {
  createOptimizedPicture,
  decorateIcons,
  fetchPlaceholders,
} from '../../scripts/aem.js';

export default async function decorate(block) {
  getApiCall(block);
}

async function getApiCall(block) {
  const apiResponse = document.createElement('apiresponse');
  apiResponse.classList.add('api-response');
  apiResponse.setAttribute('aria-label', 'Close');
  apiResponse.type = 'text';
  apiResponse.innerHTML = '<span class="icon icon-close"></span>';
  //closeButton.addEventListener('click', () => dialog.close());
  //dialog.prepend(closeButton);
  const response = await fetch('https://localhost:8443/bin/readnode').then(res => res.clone().json())
  block.append(JSON.stringify(response));
  console.log('response');
  if (response.ok) {
    // Get JSON value from the response body
    return response.json();
  }
}