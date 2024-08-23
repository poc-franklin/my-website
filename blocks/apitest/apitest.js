import {
  createOptimizedPicture,
  decorateIcons,
  fetchPlaceholders,
} from '../../scripts/aem.js';

export default async function decorate(block) {
  getApiCall(block);
}

async function getApiCall(block) {
  const response = await fetch('https://public-images-all.s3.amazonaws.com/Output.json').then(res => res.clone().json())
  block.append(JSON.stringify(response));
  console.log('response');
}