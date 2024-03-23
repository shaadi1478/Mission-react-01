import PriceOption from "../priceOption/PriceOption";

const PriceOptions = () => {
        const priceOptions = [
          {
            "id": 1,
            "name": "Basic Membership",
            "features": [
              "Access to cardio equipment",
              "Access to weightlifting area",
              "Locker room access",
              "Basic fitness classes"
            ],
            "price": 29.99
          },
          {
            "id": 2,
            "name": "Premium Membership",
            "features": [
              "Access to all equipment and facilities",
              "Personal training sessions (2 per month)",
              "Sauna and steam room access",
              "Unlimited fitness classes"
            ],
            "price": 49.99
          },
          {
            "id": 3,
            "name": "VIP Membership",
            "features": [
              "Access to all equipment and facilities",
              "Unlimited personal training sessions",
              "Access to VIP lounge",
              "Towel service",
              "Nutritional consultation"
            ],
            "price": 99.99
          },
          {
            "id": 4,
            "name": "Student Membership",
            "features": [
              "Access to cardio equipment",
              "Access to weightlifting area",
              "Locker room access",
              "Discounted fitness classes"
            ],
            "price": 19.99
          },
          {
            "id": 5,
            "name": "Senior Membership",
            "features": [
              "Access to all equipment and facilities",
              "Senior-specific fitness classes",
              "Access to group activities",
              "Locker room access"
            ],
            "price": 39.99
          },
          {
            "id": 6,
            "name": "Family Membership",
            "features": [
              "Access to all equipment and facilities",
              "Family group fitness classes",
              "Childcare services",
              "Access to pool"
            ],
            "price": 89.99
          }
        ]
      
    return (
        <div>
            <h2 className="text-5xl">Best Prices in the twon</h2>
            {
               priceOptions.map(option => <PriceOption key={option.id} option={option}></PriceOption>)
            }
        </div>
    );
};

export default PriceOptions;