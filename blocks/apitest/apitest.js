import {
  createOptimizedPicture,
  decorateIcons,
  fetchPlaceholders,
} from '../../scripts/aem.js';

export default async function decorate(block) {
  getApiCall(block);
}

async function getApiCall(block) {
  const response = await fetch('https://jsonplaceholder.typicode.com/todos/1').then(res => res.clone().json())
  block.append(response.title);
  console.log('response');
}