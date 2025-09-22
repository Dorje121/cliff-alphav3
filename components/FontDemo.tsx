import React from "react";

const FontDemo: React.FC = () => {
  return (
    <div className="p-8 space-y-8 bg-black text-white">
      <h1 className="text-4xl font-bold mb-8 text-center">Font Demo</h1>

      {/* DM Sans Examples */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold border-b border-gray-600 pb-2">
          DM Sans Font
        </h2>
        <div className="space-y-2">
          <p className="font-dm-sans text-lg font-light">
            DM Sans Light - Modern and clean typography
          </p>
          <p className="font-dm-sans text-lg font-normal">
            DM Sans Regular - Perfect for body text and UI elements
          </p>
          <p className="font-dm-sans text-lg font-medium">
            DM Sans Medium - Great for emphasis and headings
          </p>
          <p className="font-dm-sans text-lg font-semibold">
            DM Sans SemiBold - Strong and readable
          </p>
          <p className="font-dm-sans text-lg font-bold">
            DM Sans Bold - Maximum impact
          </p>
          <p className="font-dm-sans text-lg font-normal italic">
            DM Sans Regular Italic - Elegant and refined
          </p>
        </div>
      </section>

      {/* Playfair Display Examples */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold border-b border-gray-600 pb-2">
          Playfair Display Font
        </h2>
        <div className="space-y-2">
          <p className="font-playfair text-lg font-normal">
            Playfair Display Regular - Elegant serif for headlines
          </p>
          <p className="font-playfair text-lg font-medium">
            Playfair Display Medium - Classic and sophisticated
          </p>
          <p className="font-playfair text-lg font-semibold">
            Playfair Display SemiBold - Traditional elegance
          </p>
          <p className="font-playfair text-lg font-bold">
            Playfair Display Bold - Dramatic and striking
          </p>
          <p className="font-playfair text-lg font-black">
            Playfair Display Black - Maximum presence
          </p>
          <p className="font-playfair text-lg font-normal italic">
            Playfair Display Regular Italic - Graceful and flowing
          </p>
        </div>
      </section>

      {/* Combined Usage Examples */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold border-b border-gray-600 pb-2">
          Combined Usage
        </h2>
        <div className="space-y-4">
          <div>
            <h3 className="font-playfair text-3xl font-bold mb-2">
              Elegant Heading
            </h3>
            <p className="font-dm-sans text-base leading-relaxed">
              This is body text using DM Sans, which pairs beautifully with
              Playfair Display headings. The combination creates a perfect
              balance between classic elegance and modern readability.
            </p>
          </div>

          <div>
            <h3 className="font-playfair text-2xl font-semibold mb-2 italic">
              Stylish Subheading
            </h3>
            <p className="font-dm-sans text-sm text-zinc-300">
              DM Sans is perfect for smaller text and UI elements, while
              Playfair Display excels in headlines and featured content.
            </p>
          </div>
        </div>
      </section>

      {/* Tailwind Classes Guide */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold border-b border-gray-600 pb-2">
          How to Use
        </h2>
        <div className="bg-gray-900 p-4 rounded-lg">
          <h3 className="font-dm-sans text-lg font-semibold mb-2">
            Tailwind Classes:
          </h3>
          <ul className="font-dm-sans text-sm space-y-1 text-zinc-300">
            <li>
              <code className="bg-gray-800 px-2 py-1 rounded">
                font-dm-sans
              </code>{" "}
              - Apply DM Sans font
            </li>
            <li>
              <code className="bg-gray-800 px-2 py-1 rounded">
                font-playfair
              </code>{" "}
              - Apply Playfair Display font
            </li>
            <li>
              <code className="bg-gray-800 px-2 py-1 rounded">font-ramro</code>{" "}
              - Apply Montserrat font (existing)
            </li>
          </ul>
          <p className="font-dm-sans text-sm text-zinc-300 mt-3">
            You can also use the CSS custom properties directly:
            <code className="bg-gray-800 px-2 py-1 rounded ml-1">
              font-family-dm-sans
            </code>
            ,
            <code className="bg-gray-800 px-2 py-1 rounded ml-1">
              font-family-playfair
            </code>
          </p>
        </div>
      </section>
    </div>
  );
};

export default FontDemo;
