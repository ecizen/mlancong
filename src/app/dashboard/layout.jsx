
import Navbar from "../component/navbar/Navbar"

export default function DashboardLayout({
    children, // will be a page or nested layout
  }) {
    return (
        <div>
          <section>
            
              <Navbar />
                {children}
          </section>
        </div>
    )
  }