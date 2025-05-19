import { User, Users } from "lucide-react"

function PricingCards() {
  return (
    <div className="bg-gray-900 min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-gray-800 rounded-lg p-6">
          <div className="flex items-center gap-2 mb-6 text-white">
            <User className="w-5 h-5" />
            <h2 className="text-xl font-medium">For Individuals</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Monthly Individual Plan */}
            <div className="bg-gray-900 rounded-lg p-6">
              <div className="mb-2 text-gray-300">Monthly</div>
              <div className="flex items-end mb-1">
                <span className="text-4xl font-bold text-white">$39</span>
                <span className="text-sm text-gray-400 ml-1 mb-1">per month</span>
              </div>

              <div className="border-t border-gray-700 my-4"></div>

              <p className="text-gray-300 mb-8">Access all in-depth courses, workshops, and mobile apps.</p>

              <button className="w-full py-2 bg-gray-700 text-white rounded hover:bg-gray-600 transition-colors mb-4">
                Start Learning
              </button>

              <a href="#" className="block text-center text-red-400 hover:text-red-300 text-sm">
                Try a free 7-Day trial
              </a>
            </div>

            {/* Yearly Individual Plan */}
            <div className="bg-gray-900 rounded-lg p-6 border border-green-500 relative">
              <div className="absolute top-4 right-4 bg-green-500 text-white text-xs px-2 py-1 rounded">Save 17%</div>

              <div className="mb-2 text-gray-300">Yearly</div>
              <div className="flex items-end mb-1">
                <span className="text-4xl font-bold text-white">$390</span>
                <span className="text-sm text-gray-400 ml-1 mb-1">per year</span>
              </div>

              <div className="text-sm text-gray-400 mb-4">$32.50/month billed yearly</div>

              <div className="border-t border-gray-700 my-4"></div>

              <p className="text-gray-300 mb-8">
                Billed yearly. Access all in-depth courses, workshops, and mobile apps.
              </p>

              <button className="w-full py-2 bg-gray-700 text-white rounded hover:bg-gray-600 transition-colors mb-4">
                Start Learning
              </button>

              <a href="#" className="block text-center text-red-400 hover:text-red-300 text-sm">
                Try a free 7-Day trial
              </a>
            </div>
          </div>
        </div>

        {/* For Teams Section */}
        <div className="bg-gray-800 rounded-lg p-6">
          <div className="flex items-center gap-2 mb-6 text-white">
            <Users className="w-5 h-5" />
            <h2 className="text-xl font-medium">For Teams</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Monthly Team Plan */}
            <div className="bg-gray-900 rounded-lg p-6">
              <div className="mb-2 text-gray-300">Monthly</div>
              <div className="flex items-end mb-1">
                <span className="text-4xl font-bold text-white">$24.50</span>
                <span className="text-sm text-gray-400 ml-1 mb-1">per seat, per month</span>
              </div>

              <div className="border-t border-gray-700 my-4"></div>

              <ul className="text-gray-300 mb-8 space-y-2 list-disc pl-5">
                <li>Access all in-depth courses for teams of 10+ users.</li>
                <li>Reporting and reassignable seats.</li>
              </ul>

              <button className="w-full py-2 bg-gray-700 text-white rounded hover:bg-gray-600 transition-colors">
                Start Learning
              </button>
            </div>

            {/* Yearly Team Plan */}
            <div className="bg-gray-900 rounded-lg p-6 border border-green-500 relative">
              <div className="absolute top-4 right-4 bg-green-500 text-white text-xs px-2 py-1 rounded">Save 37%</div>

              <div className="mb-2 text-gray-300">Yearly</div>
              <div className="flex items-end mb-1">
                <span className="text-4xl font-bold text-white">$245</span>
                <span className="text-sm text-gray-400 ml-1 mb-1">per seat, per year</span>
              </div>

              <div className="text-sm text-gray-400 mb-4">$20.42/seat/month billed yearly</div>

              <div className="border-t border-gray-700 my-4"></div>

              <ul className="text-gray-300 mb-8 space-y-2 list-disc pl-5">
                <li>Billed yearly. Access all in-depth courses for teams of 10+ users.</li>
                <li>Reporting and reassignable seats.</li>
              </ul>

              <button className="w-full py-2 bg-gray-700 text-white rounded hover:bg-gray-600 transition-colors">
                Start Learning
              </button>
            </div>
          </div>

          <div className="text-center text-gray-400 text-sm mt-4">
            Pay via invoice or for enterprise plans, email{" "}
            <a href="mailto:support@frontendmasters.com" className="text-white">
              support@chocoui.com
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PricingCards

