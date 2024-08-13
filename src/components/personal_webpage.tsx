import Link from "next/link"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"

export default function personal_webpage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <header className="sticky top-0 z-40 w-full border-b bg-background">
        <div className="container flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4">
            <Link href="#" className="flex items-center gap-2 font-bold" prefetch={false}>
              <Avatar className="h-8 w-8 rounded-full">
                <AvatarImage src="/placeholder-user.jpg" alt="@shadcn" />
                <AvatarFallback></AvatarFallback>
              </Avatar>
              <span className="hidden sm:inline">Jinseop Kwak</span>
            </Link>
          </div>
          <nav className="flex items-center gap-4">
            <Link href="#" className="rounded-md px-3 py-2 text-sm font-medium hover:bg-muted" prefetch={false}>
              Dashboard
            </Link>
            <Link href="#" className="rounded-md px-3 py-2 text-sm font-medium hover:bg-muted" prefetch={false}>
              Bio
            </Link>
            <Link href="#" className="rounded-md px-3 py-2 text-sm font-medium hover:bg-muted" prefetch={false}>
              Portfolio
            </Link>
            <Link href="#" className="rounded-md px-3 py-2 text-sm font-medium hover:bg-muted" prefetch={false}>
              Contact
            </Link>
          </nav>
        </div>
      </header>
      <main className="flex-1">
        <section className="bg-muted py-12 sm:py-16 lg:py-20">
          <div className="container grid grid-cols-1 gap-8 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
            <div className="space-y-4">
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Hi, I&apos;m Jinseop Kwak</h1>
              <p className="text-muted-foreground">
                Im a passionate frontend developer with a strong focus on creating beautiful and user-friendly web
                applications.
              </p>
              <div className="flex flex-wrap gap-2">
                
              </div>
            </div>
            <div className="space-y-4">
              <h2 className="text-2xl font-bold tracking-tight">About Me</h2>
              <p className="text-muted-foreground">
                
              </p>
              <p className="text-muted-foreground">
                
              </p>
            </div>
          </div>
        </section>
        <section className="bg-background py-12 sm:py-16 lg:py-20">
          <div className="container grid grid-cols-1 gap-8 px-4 sm:px-6 lg:grid-cols-3 lg:px-8">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold tracking-tight">Skills</h2>
              <ul className="grid grid-cols-2 gap-4">
                <li className="rounded-md bg-muted p-4 text-center">
                  <CodepenIcon className="mx-auto h-8 w-8" />
                  <p className="mt-2 text-sm font-medium">React</p>
                </li>
                <li className="rounded-md bg-muted p-4 text-center">
                  <EclipseIcon className="mx-auto h-8 w-8" />
                  <p className="mt-2 text-sm font-medium">JavaScript</p>
                </li>
                <li className="rounded-md bg-muted p-4 text-center">
                  <CodepenIcon className="mx-auto h-8 w-8" />
                  <p className="mt-2 text-sm font-medium">CSS</p>
                </li>
                <li className="rounded-md bg-muted p-4 text-center">
                  <HashIcon className="mx-auto h-8 w-8" />
                  <p className="mt-2 text-sm font-medium">HTML</p>
                </li>
                <li className="rounded-md bg-muted p-4 text-center">
                  <WindIcon className="mx-auto h-8 w-8" />
                  <p className="mt-2 text-sm font-medium">Lorem ipsum</p>
                </li>
                <li className="rounded-md bg-muted p-4 text-center">
                  <GitGraphIcon className="mx-auto h-8 w-8" />
                  <p className="mt-2 text-sm font-medium">Git</p>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h2 className="text-2xl font-bold tracking-tight">Work Experience</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-medium">Frontend Developer, Acme Inc.</h3>
                  <p className="text-muted-foreground">June 2018 - Present</p>
                  <p className="text-muted-foreground">
                    
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-medium">Intern, Widgets Co.</h3>
                  <p className="text-muted-foreground">May 2017 - August 2017</p>
                  <p className="text-muted-foreground">
                    Gained valuable experience in web development, working on a variety of projects and learning new
                    technologies.
                  </p>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <h2 className="text-2xl font-bold tracking-tight">Portfolio</h2>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <Link href="#" className="group relative overflow-hidden rounded-md" prefetch={false}>
                  <img
                    src="/placeholder.svg"
                    width={400}
                    height={300}
                    alt="Project 1"
                    className="h-full w-full object-cover transition-all duration-300 group-hover:scale-105"
                    style={{ aspectRatio: "400/300", objectFit: "cover" }}
                  />
                  <div className="absolute inset-0 bg-primary/80 p-4 opacity-0 transition-all duration-300 group-hover:opacity-100">
                    <h3 className="text-lg font-bold text-primary-foreground">Project 1</h3>
                    <p className="text-sm text-primary-foreground">Lorem ipsum</p>
                    <div className="mt-4 flex justify-end">
                      <Button variant="secondary" size="sm" className="rounded-md">
                        View Project
                      </Button>
                    </div>
                  </div>
                </Link>
                <Link href="#" className="group relative overflow-hidden rounded-md" prefetch={false}>
                  <img
                    src="/placeholder.svg"
                    width={400}
                    height={300}
                    alt="Project 2"
                    className="h-full w-full object-cover transition-all duration-300 group-hover:scale-105"
                    style={{ aspectRatio: "400/300", objectFit: "cover" }}
                  />
                  <div className="absolute inset-0 bg-primary/80 p-4 opacity-0 transition-all duration-300 group-hover:opacity-100">
                    <h3 className="text-lg font-bold text-primary-foreground">Project 2</h3>
                    <p className="text-sm text-primary-foreground">
                      A responsive website built with HTML, CSS, and JavaScript.
                    </p>
                    <div className="mt-4 flex justify-end">
                      <Button variant="secondary" size="sm" className="rounded-md">
                        View Project
                      </Button>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-muted py-6">
        <div className="container flex items-center justify-between px-4 sm:px-6 lg:px-8">
          <p className="text-sm text-muted-foreground">&copy; 2024 John Doe. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link href="#" className="rounded-md p-2 text-muted-foreground hover:bg-background" prefetch={false}>
              <GitlabIcon className="h-5 w-5" />
            </Link>
            <Link href="#" className="rounded-md p-2 text-muted-foreground hover:bg-background" prefetch={false}>
              <LinkedinIcon className="h-5 w-5" />
            </Link>
            <Link href="#" className="rounded-md p-2 text-muted-foreground hover:bg-background" prefetch={false}>
              <TwitterIcon className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

function CodepenIcon(props : any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2" />
      <line x1="12" x2="12" y1="22" y2="15.5" />
      <polyline points="22 8.5 12 15.5 2 8.5" />
      <polyline points="2 15.5 12 8.5 22 15.5" />
      <line x1="12" x2="12" y1="2" y2="8.5" />
    </svg>
  )
}




function EclipseIcon(props : any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M12 2a7 7 0 1 0 10 10" />
    </svg>
  )
}


function GitGraphIcon(props : any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="5" cy="6" r="3" />
      <path d="M5 9v6" />
      <circle cx="5" cy="18" r="3" />
      <path d="M12 3v18" />
      <circle cx="19" cy="6" r="3" />
      <path d="M16 15.7A9 9 0 0 0 19 9" />
    </svg>
  )
}


function GitlabIcon(props : any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m22 13.29-3.33-10a.42.42 0 0 0-.14-.18.38.38 0 0 0-.22-.11.39.39 0 0 0-.23.07.42.42 0 0 0-.14.18l-2.26 6.67H8.32L6.1 3.26a.42.42 0 0 0-.1-.18.38.38 0 0 0-.26-.08.39.39 0 0 0-.23.07.42.42 0 0 0-.14.18L2 13.29a.74.74 0 0 0 .27.83L12 21l9.69-6.88a.71.71 0 0 0 .31-.83Z" />
    </svg>
  )
}


function HashIcon(props : any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="9" y2="9" />
      <line x1="4" x2="20" y1="15" y2="15" />
      <line x1="10" x2="8" y1="3" y2="21" />
      <line x1="16" x2="14" y1="3" y2="21" />
    </svg>
  )
}


function LinkedinIcon(props : any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  )
}


function TwitterIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  )
}


function WindIcon(props : any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M17.7 7.7a2.5 2.5 0 1 1 1.8 4.3H2" />
      <path d="M9.6 4.6A2 2 0 1 1 11 8H2" />
      <path d="M12.6 19.4A2 2 0 1 0 14 16H2" />
    </svg>
  )
}
