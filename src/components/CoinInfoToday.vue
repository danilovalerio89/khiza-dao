<script setup></script>
<template>
  <div class="div_container">
    <h2>'NOME DA MOEDA'</h2>
    <h4>O Valor da 'MOEDA AQUI' hoje</h4>
    <h3>R$110.500</h3>
  </div>
  <div class="div_picker">
    <button>Picker Dia Inicio</button>
    <button>Picker Dia Final</button>
    <button>Procurar</button>
  </div>
</template>

<style scoped>
.div_container {
  margin-top: 3rem;
  gap: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
.div_container > h2 {
  font-size: 2rem;
}
.div_container > h3 {
  font-size: 1.75rem;
}

.div_container > h4 {
  font-size: 1rem;
}

.div_picker {
  margin-top: 3rem;
  gap: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

@media (min-width: 768px) {
}
</style>
