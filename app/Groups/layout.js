export default function GroupsLayout({
    children, // will be a page or nested layout
  }) {
    return (
      <section>
        {/* Include shared UI here e.g. a header or sidebar */}
        ciao ciao dal layout
   
        {children}
      </section>
    )
  }