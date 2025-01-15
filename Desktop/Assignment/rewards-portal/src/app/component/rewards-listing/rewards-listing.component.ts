import { Component, OnInit } from "@angular/core";
import { Reward } from "../../models/reward.model";
import { RewardsService } from "../../services/rewards.service";
import { CommonModule } from "@angular/common";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-rewards-listing',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './rewards-listing.component.html',
  styleUrls: ['./rewards-listing.component.scss']
})
export class RewardsListingComponent implements OnInit {
  rewards: Reward[] = [];
  categories: string[] = [
    'All Rewards', 
    'Electronics', 
    'Clothing', 
    'Accessories'
  ];
  
  isSortMenuOpen = false;
  searchTerm = '';
  selectedSortOrder: string | null = null;
  selectedCategory: string = 'All Rewards';
  currentPage = 1;
  itemsPerPage = 10;

  constructor(private rewardsService: RewardsService) {}

  ngOnInit() {
    this.rewards = this.rewardsService.getRewards();
  }

  toggleSortMenu() {
    this.isSortMenuOpen = !this.isSortMenuOpen;
  }

  selectSortOrder(order: string) {
    this.selectedSortOrder = order;
  }

  applySort() {
    if (this.selectedSortOrder) {
      const ascending = this.selectedSortOrder === 'asc';
      this.rewards = this.rewardsService.sortRewardsByName(ascending);
    }
    this.isSortMenuOpen = false;
  }

  resetAll() {
    this.selectedSortOrder = null;
    this.searchTerm = '';
    this.selectedCategory = 'All Rewards';
    this.rewards = this.rewardsService.getRewards(); // Reset rewards
  }

  selectCategory(category: string) {
    this.selectedCategory = category;
    this.currentPage = 1; // Reset to first page on category change
  }

  getRewardStatus(reward: Reward): string {
    return this.rewardsService.getRewardStatus(reward);
  }

  get filteredRewards(): Reward[] {
    return this.rewards.filter(reward =>
      reward.name.toLowerCase().includes(this.searchTerm.toLowerCase()) &&
      (this.selectedCategory === 'All Rewards' || reward.category === this.selectedCategory)
    );
  }

  get paginatedRewards(): Reward[] {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    return this.filteredRewards.slice(startIndex, endIndex);
  }

  nextPage() {
    if (this.currentPage * this.itemsPerPage < this.filteredRewards.length) {
      this.currentPage++;
    }
  }

  previousPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }

  getCategoryCount(category: string): number {
    if (category === 'All Rewards') {
      return this.rewards.length;
    }
    return this.rewards.filter(reward => reward.category === category).length;
  }

  clearCategoryFilter() {
    this.selectedCategory = 'All Rewards';
  }
}