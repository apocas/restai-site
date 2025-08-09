'use client';

export default function Contact() {

  return (
    <div id="contact" className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base text-primary-600 font-semibold tracking-wide uppercase">Contact</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Get started with RESTai
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
            Ready to transform your business with AI? Contact our team to discuss your requirements and get started.
          </p>
        </div>

        <div className="mt-16">
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-lg text-gray-600">
              Ready to get started? Reach out to us at{' '}
              <a href="mailto:hello@restai.com" className="text-primary-600 hover:text-primary-700 font-medium">
                hello@restai.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
