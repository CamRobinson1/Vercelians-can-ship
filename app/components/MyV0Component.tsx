/**
 * v0 by Vercel.
 * @see https://v0.dev/t/VUY4lbXsihL
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
export default function Component() {
  return (
    <div className="bg-background text-foreground">
      <header className="bg-primary text-primary-foreground py-6 px-4 md:px-6">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-3xl font-bold">Sushi Menu</h1>
          <p className="text-sm text-primary-foreground/80 mt-2">
            Discover the finest selection of sushi at our restaurant.
          </p>
        </div>
      </header>
      <main className="container mx-auto max-w-4xl py-12 px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-bold mb-4">Nigiri</h2>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex justify-between">
                <span>Tuna Nigiri</span>
                <span className="font-medium">$5.99</span>
              </div>
              <div className="flex justify-between">
                <span>Salmon Nigiri</span>
                <span className="font-medium">$5.99</span>
              </div>
              <div className="flex justify-between">
                <span>Yellowtail Nigiri</span>
                <span className="font-medium">$6.99</span>
              </div>
              <div className="flex justify-between">
                <span>Shrimp Nigiri</span>
                <span className="font-medium">$5.99</span>
              </div>
              <div className="flex justify-between">
                <span>Egg Nigiri</span>
                <span className="font-medium">$4.99</span>
              </div>
              <div className="flex justify-between">
                <span>Inari Nigiri</span>
                <span className="font-medium">$4.99</span>
              </div>
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-4">Maki Rolls</h2>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex justify-between">
                <span>California Roll</span>
                <span className="font-medium">$8.99</span>
              </div>
              <div className="flex justify-between">
                <span>Spicy Tuna Roll</span>
                <span className="font-medium">$9.99</span>
              </div>
              <div className="flex justify-between">
                <span>Cucumber Roll</span>
                <span className="font-medium">$6.99</span>
              </div>
              <div className="flex justify-between">
                <span>Avocado Roll</span>
                <span className="font-medium">$7.99</span>
              </div>
              <div className="flex justify-between">
                <span>Rainbow Roll</span>
                <span className="font-medium">$12.99</span>
              </div>
              <div className="flex justify-between">
                <span>Philadelphia Roll</span>
                <span className="font-medium">$9.99</span>
              </div>
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-4">Sashimi</h2>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex justify-between">
                <span>Tuna Sashimi</span>
                <span className="font-medium">$12.99</span>
              </div>
              <div className="flex justify-between">
                <span>Salmon Sashimi</span>
                <span className="font-medium">$12.99</span>
              </div>
              <div className="flex justify-between">
                <span>Yellowtail Sashimi</span>
                <span className="font-medium">$14.99</span>
              </div>
              <div className="flex justify-between">
                <span>Albacore Sashimi</span>
                <span className="font-medium">$12.99</span>
              </div>
              <div className="flex justify-between">
                <span>Hamachi Sashimi</span>
                <span className="font-medium">$14.99</span>
              </div>
              <div className="flex justify-between">
                <span>Hirame Sashimi</span>
                <span className="font-medium">$12.99</span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
