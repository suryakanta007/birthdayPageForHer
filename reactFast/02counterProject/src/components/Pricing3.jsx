function PricingComparison() {
    const features = [
      { name: "Number of Users", free: "20 Pages", standard: "600 Pages", premium: "Unlimited" },
      { name: "", free: "", standard: "Pages Add-ons on Demand", premium: "Pages Add-ons on Demand" },
      { name: "Users Per Page", free: "5 Pages", standard: "50 Pages", premium: "Unlimited" },
      { name: "", free: "", standard: "", premium: "Pages Add-ons on Demand" },
      { name: "Includes essential features to get started", free: true, standard: true, premium: true },
      { name: "More advanced features for increased productivity", free: true, standard: true, premium: true },
      { name: "Designing & Development", free: false, standard: true, premium: true },
      { name: "Customizable options to meet your specific needs", free: false, standard: true, premium: true },
      { name: "Secure data storage", free: false, standard: false, premium: true },
      { name: "Email Support", free: false, standard: false, premium: true },
      { name: "24/7 customer support", free: false, standard: false, premium: true },
      { name: "Analytics and reporting", free: false, standard: true, premium: true },
      { name: "Account Management", free: true, standard: true, premium: true },
    ]
  
    // Checkmark SVG component
    const CheckMark = () => (
      <svg className="w-5 h-5 text-gray-800" fill="currentColor" viewBox="0 0 20 20">
        <path
          fillRule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
          clipRule="evenodd"
        />
      </svg>
    )
  
    // Function to render cell content based on value type
    const renderCellContent = (value) => {
      if (typeof value === "boolean") {
        return value ? <CheckMark /> : null
      } else {
        return <span className="text-sm text-gray-600">{value}</span>
      }
    }
  
    return (
      <div className="w-full max-w-6xl mx-auto p-4">
        <div className="border rounded-lg overflow-hidden">
          {/* Header Row */}
          <div className="grid grid-cols-4 border-b">
            {/* Feature Column Header */}
            <div className="p-4 border-r">
              <div className="flex items-start justify-between">
                <div>
                  <h2 className="font-medium text-gray-800">Compare plans</h2>
                  <p className="text-sm text-gray-600 mt-2">
                    Choose your ideal plan according to your organizational plan
                  </p>
                </div>
                <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2 py-1 rounded">40% Off</span>
              </div>
            </div>
  
            {/* Free Plan Header */}
            <div className="p-4 border-r text-center">
              <h3 className="font-medium text-gray-800">Free</h3>
              <p className="text-xs text-gray-500">Lifetime</p>
              <button className="mt-4 w-full py-2 bg-gray-800 text-white text-sm rounded hover:bg-gray-700 transition-colors">
                Choose This Plan
              </button>
            </div>
  
            {/* Standard Plan Header */}
            <div className="p-4 border-r text-center">
              <h3 className="font-medium text-gray-800">$25</h3>
              <p className="text-xs text-gray-500">/month</p>
              <button className="mt-4 w-full py-2 bg-gray-800 text-white text-sm rounded hover:bg-gray-700 transition-colors">
                Choose This Plan
              </button>
            </div>
  
            {/* Premium Plan Header */}
            <div className="p-4 text-center">
              <h3 className="font-medium text-gray-800">$40</h3>
              <p className="text-xs text-gray-500">/month</p>
              <button className="mt-4 w-full py-2 bg-gray-800 text-white text-sm rounded hover:bg-gray-700 transition-colors">
                Choose This Plan
              </button>
            </div>
          </div>
  
          {/* Feature Rows */}
          {features.map((feature, index) => (
            <div key={index} className={`grid grid-cols-4 ${index !== features.length - 1 ? "border-b" : ""}`}>
              <div className="p-4 border-r">
                <p className="text-sm text-gray-700">{feature.name}</p>
              </div>
              <div className="p-4 border-r flex justify-center items-center">{renderCellContent(feature.free)}</div>
              <div className="p-4 border-r flex justify-center items-center">{renderCellContent(feature.standard)}</div>
              <div className="p-4 flex justify-center items-center">{renderCellContent(feature.premium)}</div>
            </div>
          ))}
        </div>
      </div>
    )
  }
  
  export default PricingComparison
  
  