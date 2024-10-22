<template>
    <div class="post">
      <div class="post_header">
        <small>{{ getLocaleDate(post.date) }}</small>
        <span>/</span>
        <small style="font-weight: bold;">{{ post.authorName }}</small>
        <span>/</span>
        <a :href="post.authorUrl">{{ post.authorUrl }}</a>
      </div>
      <div class="post_content">
        <p ref="postContent"></p>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import getColor from "../utils/getColor";
  
  const props = defineProps({
    post: {
      type: Object,
      required: true
    }
  });
  
  const postContent = ref(null);
  
  function getLocaleDate(utcDate) {
    const date = Date.parse(utcDate);
    return Intl.DateTimeFormat('RU-ru', {
      hour: '2-digit',
      minute: '2-digit',
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    }).format(date);
  }
  
  onMounted(() => {
    if (!postContent.value) return;
  
    const textNode = props.post.content;
    postContent.value.innerHTML = '';
  
    textNode.split('').forEach(character => {
      const span = document.createElement('span');
      span.textContent = character;
      postContent.value.appendChild(span);
    });
  
    props.post.contentPostTones.forEach(part => {
      const { position, length, tone } = part;
      const inlineColorValue = getColor(tone);
      const childrenArr = postContent.value.childNodes;
  
      childrenArr.forEach((node, ind) => {
        if(ind < position + length && ind >= position) {
          node.style.backgroundColor = inlineColorValue;
        }
      });
    });
  });
  </script>
  
  <style>
  </style>
  