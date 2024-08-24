import {
  createOptimizedPicture,
  decorateIcons,
  fetchPlaceholders,
} from '../../scripts/aem.js';

export default async function decorate(block) {
  getApiCall(block);
}

async function getApiCall(block) {
  const response = await fetch('https://pokeapi.co/api/v2/pokemon/2/').then(res => res.clone().json())
  block.append(JSON.stringify(response));
  console.log('response');
}