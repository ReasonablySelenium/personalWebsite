<template>
  <header class="header">
    <g-link to="/">Reasonably Selenium's Blog</g-link>
    <nav class="nav">
      <g-link class="nav__link" to="/">Home</g-link>
      <g-link class="nav__link" to="/about-me/">About Me</g-link>
    </nav>
  </header>
</template>

<style>
.header {
  background: rgb(0, 100, 0);
  color: white;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  padding: 1.5rem 3rem;
  font-size: 1.5rem;
}

@media all and (max-width: 500px) {
  .header {
    flex-direction: column;
  }
}

.nav__link {
  margin-left: 20px;
  font-size: 1rem;
  text-transform: uppercase;
  flex-grow: 2;
}
</style>