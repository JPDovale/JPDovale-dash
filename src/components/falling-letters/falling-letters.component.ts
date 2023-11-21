import { Component, OnInit } from '@angular/core'
import { CommonModule } from '@angular/common'

@Component({
  selector: 'app-falling-letters',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './falling-letters.component.html',
  styleUrl: './falling-letters.component.css',
})
export class FallingLettersComponent implements OnInit {
  letters: { char: string; top: number; left: number }[] = []

  ngOnInit(): void {
    setInterval(() => {
      this.createFallingLatter()
    }, 10)
  }

  createFallingLatter() {
    const letter = {
      char: String.fromCharCode(Math.floor(Math.random() * 26) + 65),
      top: 0,
      left: Math.random() * 100,
    }

    this.letters.push(letter)

    const timeToRemove = Math.floor(Math.random() * (3500 - 3000)) + 3000

    setTimeout(() => {
      this.letters.splice(this.letters.indexOf(letter), 1)
    }, timeToRemove) // Remove letter after 5 seconds
  }
}
