export default {
  data() {
    return {
      limit: 3,
    };
  },
  methods: {
    setSelectedTab(selected) {
      this.filterBy = selected.toLowerCase();
      this.page = 1;
    },
    filter(data) {
      const filtered = [];
      const start = (this.page - 1) * this.limit;
      const end = (this.page * this.limit > data.length)
        ? data.length : this.page * this.limit;

      for (let index = start; index < end; index += 1) {
        filtered.push(data[index]);
      }
      return filtered;
    },
  },
};
