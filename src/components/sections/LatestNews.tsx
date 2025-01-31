const NewsCard = ({ image, category }) => (
  <div className="relative overflow-hidden rounded-lg">
    <img src={image} alt="" className="w-full h-64 object-cover" />
    <div className="absolute bottom-4 left-4">
      <span className="bg-white px-4 py-2 rounded-full text-sm font-medium">
        {category}
      </span>
    </div>
  </div>
);

const LatestNews = () => {
  const news = [
    { image: "https://cdn.builder.io/api/v1/image/assets/924a520d2ecd4a249b6d608543649168/18e900990159edcbc113e2cdadf8855bb0566247631fe84df9b7fe3f75349d2b?placeholderIfAbsent=true&width=100 100w, https://cdn.builder.io/api/v1/image/assets/924a520d2ecd4a249b6d608543649168/18e900990159edcbc113e2cdadf8855bb0566247631fe84df9b7fe3f75349d2b?placeholderIfAbsent=true&width=200 200w, https://cdn.builder.io/api/v1/image/assets/924a520d2ecd4a249b6d608543649168/18e900990159edcbc113e2cdadf8855bb0566247631fe84df9b7fe3f75349d2b?placeholderIfAbsent=true&width=400 400w, https://cdn.builder.io/api/v1/image/assets/924a520d2ecd4a249b6d608543649168/18e900990159edcbc113e2cdadf8855bb0566247631fe84df9b7fe3f75349d2b?placeholderIfAbsent=true&width=800 800w, https://cdn.builder.io/api/v1/image/assets/924a520d2ecd4a249b6d608543649168/18e900990159edcbc113e2cdadf8855bb0566247631fe84df9b7fe3f75349d2b?placeholderIfAbsent=true&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/924a520d2ecd4a249b6d608543649168/18e900990159edcbc113e2cdadf8855bb0566247631fe84df9b7fe3f75349d2b?placeholderIfAbsent=true&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/924a520d2ecd4a249b6d608543649168/18e900990159edcbc113e2cdadf8855bb0566247631fe84df9b7fe3f75349d2b?placeholderIfAbsent=true&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/924a520d2ecd4a249b6d608543649168/18e900990159edcbc113e2cdadf8855bb0566247631fe84df9b7fe3f75349d2b?placeholderIfAbsent=true", category: "Music" },
    { image: "https://cdn.builder.io/api/v1/image/assets/924a520d2ecd4a249b6d608543649168/218539869bf1be139c274c1493bcf11b68710a53bc69b7321d2db31c368c14f5?placeholderIfAbsent=true&width=100 100w, https://cdn.builder.io/api/v1/image/assets/924a520d2ecd4a249b6d608543649168/218539869bf1be139c274c1493bcf11b68710a53bc69b7321d2db31c368c14f5?placeholderIfAbsent=true&width=200 200w, https://cdn.builder.io/api/v1/image/assets/924a520d2ecd4a249b6d608543649168/218539869bf1be139c274c1493bcf11b68710a53bc69b7321d2db31c368c14f5?placeholderIfAbsent=true&width=400 400w, https://cdn.builder.io/api/v1/image/assets/924a520d2ecd4a249b6d608543649168/218539869bf1be139c274c1493bcf11b68710a53bc69b7321d2db31c368c14f5?placeholderIfAbsent=true&width=800 800w, https://cdn.builder.io/api/v1/image/assets/924a520d2ecd4a249b6d608543649168/218539869bf1be139c274c1493bcf11b68710a53bc69b7321d2db31c368c14f5?placeholderIfAbsent=true&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/924a520d2ecd4a249b6d608543649168/218539869bf1be139c274c1493bcf11b68710a53bc69b7321d2db31c368c14f5?placeholderIfAbsent=true&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/924a520d2ecd4a249b6d608543649168/218539869bf1be139c274c1493bcf11b68710a53bc69b7321d2db31c368c14f5?placeholderIfAbsent=true&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/924a520d2ecd4a249b6d608543649168/218539869bf1be139c274c1493bcf11b68710a53bc69b7321d2db31c368c14f5?placeholderIfAbsent=true", category: "Sports" },
    { image: "https://cdn.builder.io/api/v1/image/assets/924a520d2ecd4a249b6d608543649168/3855a559dc8f13df01ddd9a891a4618bfb494703def43ac191b26408d6eb9ede?placeholderIfAbsent=true&width=100 100w, https://cdn.builder.io/api/v1/image/assets/924a520d2ecd4a249b6d608543649168/3855a559dc8f13df01ddd9a891a4618bfb494703def43ac191b26408d6eb9ede?placeholderIfAbsent=true&width=200 200w, https://cdn.builder.io/api/v1/image/assets/924a520d2ecd4a249b6d608543649168/3855a559dc8f13df01ddd9a891a4618bfb494703def43ac191b26408d6eb9ede?placeholderIfAbsent=true&width=400 400w, https://cdn.builder.io/api/v1/image/assets/924a520d2ecd4a249b6d608543649168/3855a559dc8f13df01ddd9a891a4618bfb494703def43ac191b26408d6eb9ede?placeholderIfAbsent=true&width=800 800w, https://cdn.builder.io/api/v1/image/assets/924a520d2ecd4a249b6d608543649168/3855a559dc8f13df01ddd9a891a4618bfb494703def43ac191b26408d6eb9ede?placeholderIfAbsent=true&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/924a520d2ecd4a249b6d608543649168/3855a559dc8f13df01ddd9a891a4618bfb494703def43ac191b26408d6eb9ede?placeholderIfAbsent=true&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/924a520d2ecd4a249b6d608543649168/3855a559dc8f13df01ddd9a891a4618bfb494703def43ac191b26408d6eb9ede?placeholderIfAbsent=true&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/924a520d2ecd4a249b6d608543649168/3855a559dc8f13df01ddd9a891a4618bfb494703def43ac191b26408d6eb9ede?placeholderIfAbsent=true", category: "Fashion" }
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12">The Latest</h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {news.map((item, index) => (
            <NewsCard key={index} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestNews;