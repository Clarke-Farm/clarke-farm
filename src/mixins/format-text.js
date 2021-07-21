export default {
  methods: {
    capitalizeEachWord(text) {
      const splitTextArr = text.split(' ');
      let formatedText = '';
      if (splitTextArr.length > 1) {
        formatedText = splitTextArr.map((word) => {
          const firstLetter = word.charAt(0);
          return word.replace(firstLetter, firstLetter.toUpperCase());
        }).join(' ');
      } else {
        const firstLetter = text.charAt(0);
        formatedText = text.replace(firstLetter, firstLetter.toUpperCase());
      }
      return formatedText;
    },
    capitalizeFirstLetter(text) {
      return text.replace(text.charAt(0), text.charAt(0).toUpperCase());
    },
    extractInitials(text) {
      const splitTextArr = text.split(' ');
      let initials = '';
      if (splitTextArr.length < 2) {
        initials = this.capitalizeEachWord(splitTextArr[0].charAt(0));
      } else {
        for (let i = 0; i < 2; i += 1) {
          initials += this.capitalizeEachWord(splitTextArr[i].charAt(0));
        }
      }
      return initials;
    },
    sliceString(text) {
      if (text.length > 27) {
        const shortText = text.slice(0, 27);
        return `${shortText} ...`;
      }
      return text;
    },
  },
};
