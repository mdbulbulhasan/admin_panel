<script setup>


import axios from "axios";
import {onMounted, ref} from "vue";
const products = ref([]);
const tags = ref([]);
async function FetchProduct() {
  try {
    const response = await axios.get("https://dummyjson.com/products");
    products.value = response.data.products;
    tags.value = response.data.tags;
  } catch (error) {
    console.log(error);
  }

}
onMounted(()=>{
  FetchProduct();
})
</script>

<template>
  <section>
    <table class="min-w-full border-collapse border border-gray-300">
      <!-- Table headers -->
      <thead>
      <tr class="bg-gray-200">
        <th class="border border-gray-300 px-4 py-2">ID</th>
        <th class="border border-gray-300 px-4 py-2">Title</th>
        <th class="border border-gray-300 px-4 py-2">Category</th>
        <th class="border border-gray-300 px-4 py-2">Price</th>
        <th class="border border-gray-300 px-4 py-2">Rating</th>
        <th class="border border-gray-300 px-4 py-2">Stock</th>
        <th class="border border-gray-300 px-4 py-2">Tags</th>
        <th class="border border-gray-300 px-4 py-2">Brand</th>
        <th class="border border-gray-300 px-4 py-2">SKU</th>
        <th class="border border-gray-300 px-4 py-2">Weight</th>
        <th class="border border-gray-300 px-4 py-2">Width</th>
        <th class="border border-gray-300 px-4 py-2">Height</th>
        <th class="border border-gray-300 px-4 py-2">Depth</th>
      </tr>
      </thead>

      <!-- Table body where products are listed -->
      <tbody>
      <tr v-for="(item, i) in products.slice(0, 8)" :key="i" class="odd:bg-white even:bg-gray-50">
        <td class="border border-gray-300 px-4 py-2">{{ item.id }}</td>
        <td class="border border-gray-300 px-4 py-2">{{ item.title }}</td>
        <td class="border border-gray-300 px-4 py-2">{{ item.category }}</td>
        <td class="border border-gray-300 px-4 py-2">{{ item.price }}</td>
        <td class="border border-gray-300 px-4 py-2">{{ item.rating }}</td>
        <td class="border border-gray-300 px-4 py-2">{{ item.stock }}</td>
        <td class="border border-gray-300 px-4 py-2">
          <span v-for="(tag) in item.tags" :key="tags" class="flex gap-1">
          {{ tag }}
          </span>
        </td>
        <td class="border border-gray-300 px-4 py-2">{{ item.brand }}</td>
        <td class="border border-gray-300 px-4 py-2">{{ item.sku }}</td>
        <td class="border border-gray-300 px-4 py-2">{{ item.weight }}</td>
        <td class="border border-gray-300 px-4 py-2">{{ item.dimensions.width }}</td>
        <td class="border border-gray-300 px-4 py-2">{{ item.dimensions.height }}</td>
        <td class="border border-gray-300 px-4 py-2">{{ item.dimensions.depth }}</td>
      </tr>
      </tbody>
    </table>
  </section>
</template>