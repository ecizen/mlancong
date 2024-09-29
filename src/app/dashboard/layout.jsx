


export default function DashboardLayout({
    children, // will be a page or nested layout
  }) {
    return (
        <div>
          <section>
                {children}
          </section>
        </div>
    )
  }