import {
    BannerOne,
    BannerSecond,
    BannerThree,
    ArrowOne,
    ArrowSecond,
    ArrowThree,
    StepOne,
    StepTwo,
    StepThree,
    StepFour,
    ProductOne,
    ProductTwo,
    ProductThree,
    ProductFour,
    ReviewOne, 
    ReviewTwo, 
    ReviewThree
  } from "./HomeImg";

  import {
    Beef,
    Chicken,
    Coffee,
    Dinner,
    Burger,
    Juice,
    Lunch,
    Pork,
    Tea,
  } from "./HomeSvg";

  const BannersData = [
    {
        className: "banner-st",
        title: "Get pleasure from it.",
        description: "Good food is wise",
        strong: " medicine",
        background: BannerOne,
      },
      {
        className: "banner-nd",
        title: "Delight in your special",
        description: "Love at first",
        strong: " bite",
        background: BannerSecond,
      },
      {
        className: "banner-rd",
        title: "Good food is life",
        description: "The belly rules the",
        strong: " mind",
        background: BannerThree,
      },
  ];

  const WorkData = [
    {
        img: StepOne,
        step: "1",
        content: "Choose Your Meal",
        arrow: ArrowOne,
      },
      {
        img: StepTwo,
        step: "2",
        content: "We Deliver it anywhere",
        arrow: ArrowSecond,
      },
      {
        img: StepThree,
        step: "3",
        content: "Cash on Delivery",
        arrow: ArrowThree,
      },
      {
        img: StepFour,
        step: "4",
        content: "Eat And Enjoy",
      },
  ];

 const IngredientsData = {
    leftData: [
        {
          title: "Mild Butter",
          content:
            "Patak's Butter Chicken Mild is a creamy tomato and butter flavour curry sauce",
          order: "01",
        },
        {
          title: "Slices Beef",
          content: "Get quality Beef Slices at Tesco. Shop in store or online",
          order: "02",
        },
        {
          title: "Sleek Onion",
          content:
            "Green onions have a sleek linear shape with white or pale-green bulbs and long green tops",
          order: "03",
        },
      ],
      rightData: [
        {
          title: "Fresh Bread",
          content:
            "Homemade bread is more nutritious than your store-bought variety",
          order: "04",
        },
        {
          title: "Lettuce Leaf",
          content:
            "It is most often grown as a leaf vegetable, but sometimes for its stem and seeds",
          order: "05",
        },
        {
          title: "Glow Cheese",
          content: "Glowfood. Cheese. Is. Unreal! As a cheese fanatic",
          order: "06",
        },
      ],
 }

 const CategoryData = [
    {
        img: Burger,
        name: "breakfast",
      },
      {
        img: Coffee,
        name: "coffee",
      },
      {
        img: Pork,
        name: "pork ham",
      },
      {
        img: Dinner,
        name: "dinner",
      },
      {
        img: Tea,
        name: "tea",
      },
      {
        img: Lunch,
        name: "lunch",
      },
      {
        img: Juice,
        name: "juice",
      },
      {
        img: Chicken,
        name: "grilled chicken",
      },
      {
        img: Beef,
        name: "roast beef",
      },
 ];

 const ProductsData = [
    {
        img: ProductOne,
        name: "Crazy Burger",
        description: "I like it. Great taste, fatty, full of nutrition. I will definitely eat again",
        price: "20",
      },
      {
        img: ProductTwo,
        name: "Beefcakes Burgers",
        description: "I like it. Great taste, fatty, full of nutrition. I will definitely eat again",
        price: "34",
      },
      {
        img: ProductThree,
        name: "The Crispy Bun",
        description: "I like it. Great taste, fatty, full of nutrition. I will definitely eat again",
        price: "15",
      },
      {
        img: ProductFour,
        name: "Bugout Burgers",
        description: "I like it. Great taste, fatty, full of nutrition. I will definitely eat again",
        price: "60",
      },
      {
        img: ProductOne,
        name: "Crazy Burger",
        description: "I like it. Great taste, fatty, full of nutrition. I will definitely eat again",
        price: "20",
      },
      {
        img: ProductTwo,
        name: "Beefcakes Burgers",
        description: "I like it. Great taste, fatty, full of nutrition. I will definitely eat again",
        price: "34",
      },
      {
        img: ProductThree,
        name: "The Crispy Bun",
        description: "I like it. Great taste, fatty, full of nutrition. I will definitely eat again",
        price: "15",
      },
      {
        img: ProductFour,
        name: "Bugout Burgers",
        description: "I like it. Great taste, fatty, full of nutrition. I will definitely eat again",
        price: "60",
      },
 ];

 const AnalysisData = [
    {
      suffix: "+",
      description: "Cups of Coffee",
    },
    {
      suffix: "+",
      description: "Orders Everyday",
    },
    {
      description: "Skilled Professionals",
    },
    {
      description: "Sandwichs at Hour",
    },
  ];

  const ReviewData = [
    {
        img: ReviewOne,
        name: "mark zuckerberg",
        role: "Co-founding Facebook, Inc",
        comment:
          "I chose food G because of their value And incredible superior customer Service they really awesome Food with quality service Ha of their value And incredible sup with quality",
      },
      {
        img: ReviewTwo,
        name: "Rose",
        role: "Main vocalist of Backpink group",
        comment:
          "Had dinner with girl friends. Menu is perfect, something for everyone. Service was awesome and Jason was very accommodating. Will be back definitely!",
      },
      {
        img: ReviewThree,
        name: "Tim Cook",
        role: "CEO of Apple",
        comment:
          "I had lunch with some of my colleagues at Echo on Day 1. I had the wedge salad - it was delicious. On Night 2, I enjoyed a drink at the bar. I had a Margarita. The service was excellent",
      },
  ]

  const detailTableData = [
    {
      title: null,
      description: "28 cm size",
      ingredients: "Ingredients",
    },
    {
      title: "24",
      description: "28 cm size",
      ingredients: "Egg",
    },
    {
      title: "728",
      description: "Energy",
      ingredients: "Milk Protein",
    },
    {
      title: "1054",
      description: "Calo",
      ingredients: "Sesame",
    },
    {
      title: "68",
      description: "Fat",
      ingredients: "Lactose",
    },
    {
      title: "25",
      description: "Gluxit",
      ingredients: "Gluten",
    },
    {
      title: "548",
      description: "Protein",
      ingredients: "Mustard",
    },
  ];

  export {
    BannersData,
    WorkData,
    IngredientsData,
    ProductsData,
    CategoryData,
    AnalysisData,
    ReviewData,
    detailTableData
  }