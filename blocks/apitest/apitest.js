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
}