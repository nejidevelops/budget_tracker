import React from 'react';

const TipsComponent = () => {
  const tips = [
    {
      id: 1,
      title: '24-Hour Rule',
      content: 'Avoid impulse purchases by thinking it over for at least 24 hours.',
      image: 'https://freesvg.org/storage/img/thumb/7oclock.png'
    },
    {
      id: 2,
      title: 'Unsubscribe',
      content: 'Unsubscribe from tempting emails from companies you buy the most from.',
      image: 'https://freesvg.org/storage/img/thumb/c_schmitz_Closed_envelope.png'
    },
    {
      id: 3,
      title: 'Save Your Tax Refund',
      content: 'Every time you receive a work bonus, or tax refund, put a portion into your savings.',
      image: 'https://freesvg.org/storage/img/thumb/piggybank.png'
    },
    {
      id: 4,
      title: 'Bring Lunch',
      content: 'You can create an emergency fund with the money you would have spent on lunch.',
      image: 'https://freesvg.org/storage/img/thumb/lunch-time.png'
    }
  ];

  return (
    <div>
      <div className='tips'>
        <h2 className="text-2xl font-bold mb-4">Tips</h2>
        <div className="container-fluid grid gap-10 px-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {tips.map((tip) => (
            <article key={tip.id} className="bg-gray-200 p-4 rounded shadow flex flex-col items-center">
            <img src={tip.image} alt={tip.title} className="mb-4" />
            <h3 className="text-xl font-bold mb-2">{tip.title}</h3>
            <p className="text-gray-700 text-base text-center">{tip.content}</p>
          </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TipsComponent;
