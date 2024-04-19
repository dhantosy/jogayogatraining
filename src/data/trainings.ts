import ImageCourseOne from 'public/assets/images/course-1.jpg';
import ImageCourseTwo from 'public/assets/images/course-2.jpg';
import ImageCourseThree from 'public/assets/images/course-3.jpg';

const trainings = [
  {
    photo: ImageCourseTwo,
    title: '100 Hour Yoga Teacher Training',
    startDate: '',
    endDate: '27 May, 2024',
    location: 'Joga Yoga, Canggu, Bali',
    link: '/yoga-teacher-training',
    list: [
      '100hr Yoga Alliance Certificate',
      'Healthy vegetarian breakfast',
      'Excursions around Bali',
      'FREE accommodation (for the first 10 sign ups!)'
    ],
    discount: true,
    discountText: 'FREE accommodation',
    description: 'You will love this transformative 200 hour yoga teacher training! Included in the training is our in-depth yoga teaching manual, yoga alliance certified YTT certificate, a range of experienced local and international yoga teachers, free airport pick up, healthy vegetarian breakfasts included, excursions around Bali and so much more. Click the button below to learn more detail.',
  },
  {
    photo: ImageCourseThree,
    title: '200 Hour Yoga Teacher Training',
    startDate: '6 - 27 May, 2024',
    endDate: '27 May, 2024',
    location: 'Joga Yoga, Canggu, Bali',
    link: '/yoga-teacher-training',
    list: [
      '200hr Yoga Alliance Certificate',
      'Healthy vegetarian breakfast',
      'Excursions around Bali',
      'FREE accommodation (for the first 10 sign ups!)'
    ],
    discount: false,
    discountText: '$1000 Early Bird Discount',
    description: 'You will love this transformative 200 hour yoga teacher training! Included in the training is our in-depth yoga teaching manual, yoga alliance certified YTT certificate, a range of experienced local and international yoga teachers, free airport pick up, healthy vegetarian breakfasts included, excursions around Bali and so much more. Click the button below to learn more detail.',
  },
  {
    photo: ImageCourseOne,
    title: '100 and 200 Hour Yoga Teacher Training',
    startDate: '1 - 22 July, 2024',
    endDate: 'August, 2024',
    location: 'Joga Yoga, Canggu, Bali',
    link: '/yoga-teacher-training',
    list: [
      '100hr or 200hr Yoga Alliance Certificate',
      'Healthy vegetarian breakfast',
      'Excursions around Bali',
      'FREE accommodation (for the first 10 sign ups!)'
    ],
    discount: false,
    discountText: '$1000 Early Bird Discount',
    description: 'You will love this transformative 200 hour yoga teacher training! Included in the training is our in-depth yoga teaching manual, yoga alliance certified YTT certificate, a range of experienced local and international yoga teachers, free airport pick up, healthy vegetarian breakfasts included, excursions around Bali and so much more. Click the button below to learn more detail.',
  },
]

export default trainings;
