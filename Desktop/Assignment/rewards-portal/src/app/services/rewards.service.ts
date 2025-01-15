import { Injectable } from "@angular/core";
import { Reward } from "../models/reward.model";

// src/app/services/rewards.service.ts
@Injectable({
    providedIn: 'root'
  })
  export class RewardsService {
    private rewards: Reward[] = [
        {
          pk: 987,
          name: "Wireless Earbuds",
          points: 150,
          display_img_url: "assets/globe.png",
          quantity: 14,
          valid_until: "2024-12-31T00:00:00",
          low_quantity: 10,
          category: 'Accessories'
        },
        {
          pk: 988,
          name: "Smart Watch",
          points: 250,
          display_img_url: "assets/globe.png",
          quantity: 5,
          valid_until: "2024-12-31T00:00:00",
          low_quantity: 10,
           category: 'Electronics'
        },
        {
          pk: 989,
          name: "Bluetooth Speaker",
          points: 100,
          display_img_url: "assets/globe.png",
          quantity: 0,
          valid_until: "2024-12-31T00:00:00",
          low_quantity: 10,
           category: 'Accessories'
        },
        {
            pk: 990,
            name: "Bluetooth Speaker",
            points: 100,
            display_img_url: "assets/globe.png",
            quantity: 0,
            valid_until: "2024-12-31T00:00:00",
            low_quantity: 10,
             category: 'Electronics'
          },
        {
            pk: 991,
            name: "Bluetooth Speaker",
            points: 100,
            display_img_url: "assets/globe.png",
            quantity: 0,
            valid_until: "2024-12-31T00:00:00",
            low_quantity: 10,
             category: 'Accessories'
          },
          {
              pk: 992,
              name: "Bluetooth Speaker",
              points: 100,
              display_img_url: "assets/globe.png",
              quantity: 0,
              valid_until: "2024-12-31T00:00:00",
              low_quantity: 10,
               category: 'Accessories'
            },
            {
                pk: 993,
                name: "Bluetooth Speaker",
                points: 100,
                display_img_url: "assets/globe.png",
                quantity: 0,
                valid_until: "2024-12-31T00:00:00",
                low_quantity: 10,
                 category: 'Electronics'
              },
              {
                  pk: 994,
                  name: "Bluetooth Speaker",
                  points: 100,
                  display_img_url: "assets/globe.png",
                  quantity: 0,
                  valid_until: "2024-12-31T00:00:00",
                  low_quantity: 10,
                   category: 'Clothing'
                },
                {
                    pk: 995,
                    name: "Bluetooth Speaker",
                    points: 100,
                    display_img_url: "assets/globe.png",
                    quantity: 0,
                    valid_until: "2024-12-31T00:00:00",
                    low_quantity: 10,
                     category: 'Clothing'
                  },
                  {
                      pk: 996,
                      name: "Bluetooth Speaker",
                      points: 100,
                      display_img_url: "assets/globe.png",
                      quantity: 0,
                      valid_until: "2024-12-31T00:00:00",
                      low_quantity: 10,
                       category: 'Electronics'
                    },
                    {
                        pk: 997,
                        name: "Bluetooth Speaker",
                        points: 100,
                        display_img_url: "assets/globe.png",
                        quantity: 0,
                        valid_until: "2024-12-31T00:00:00",
                        low_quantity: 10,
                         category: 'Clothing'
                      },
                      {
                          pk: 998,
                          name: "Bluetooth Speaker",
                          points: 100,
                          display_img_url: "assets/globe.png",
                          quantity: 0,
                          valid_until: "2024-12-31T00:00:00",
                          low_quantity: 10,
                           category: 'Electronics'
                        }
      ];
    
      getRewards(): Reward[] {
        return this.rewards;
      }
    
      sortRewardsByName(ascending: boolean = true): Reward[] {
        return [...this.rewards].sort((a, b) => 
          ascending 
            ? a.name.localeCompare(b.name)
            : b.name.localeCompare(a.name)
        );
      }
    
      getRewardStatus(reward: Reward): string {
        if (reward.quantity === 0) return 'Out of Stock';
        if (reward.quantity <= reward.low_quantity) 
          return `On High Demand (Only ${reward.quantity} rewards left)`;
        return '';
      }
    }
  
  