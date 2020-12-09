export const store = () => ({
  title: "Test",
  done: true,
  toggle() {
    this.done = !this.done
  },
})
