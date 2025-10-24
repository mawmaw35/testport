function ClientHighlights() {
  const clients = [
    {
      name: 'TechCorp',
      project: 'Enterprise Dashboard',
      result: '40% increase in user productivity',
      testimonial:
        'Outstanding work! The new dashboard has transformed how our team works.',
    },
    {
      name: 'StartupXYZ',
      project: 'Mobile App Development',
      result: '100K+ downloads in first month',
      testimonial:
        'Exceeded our expectations in every way. Highly professional and creative.',
    },
    {
      name: 'DesignStudio',
      project: 'Website Redesign',
      result: '3x increase in conversion rate',
      testimonial:
        'The attention to detail and user experience expertise was phenomenal.',
    },
  ];

  const stats = [
    { value: '50+', label: 'Projects Completed' },
    { value: '30+', label: 'Happy Clients' },
    { value: '10+', label: 'Years Experience' },
    { value: '95%', label: 'Client Satisfaction' },
  ];

  return (
    <section className="section-padding bg-dark-surface">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="heading-lg mb-6">Client Highlights</h2>
          <p className="text-body">
            Proud to have worked with amazing clients and delivered 
            impactful results that exceeded expectations.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl sm:text-5xl font-bold mb-2">
                {stat.value}
              </div>
              <div className="text-dark-text-secondary">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {clients.map((client, index) => (
            <div key={index} className="card">
              <div className="mb-4">
                <h3 className="text-xl font-semibold mb-1">{client.name}</h3>
                <p className="text-sm text-dark-text-secondary">{client.project}</p>
              </div>
              <div className="mb-4 p-3 bg-dark-bg rounded-lg">
                <p className="text-sm font-medium">{client.result}</p>
              </div>
              <p className="text-dark-text-secondary text-sm italic">
                "{client.testimonial}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ClientHighlights;
