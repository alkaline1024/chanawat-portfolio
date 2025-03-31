export default defineAppConfig({
  ui: {
    button: {
      slots: {
        base: "cursor-pointer hover:!bg-green-600 rounded-md",
      },
      variants: {
        size: {
          "2xl": "px-5 py-3 text-xl gap-3",
        },
      },
      defaultVariants: {
        size: "2xl",
      },
    },
  },
});
