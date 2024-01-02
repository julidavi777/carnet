<div x-data="{ open: false }">
    <div @click="open = !open" class="cursor-pointer">
        <div class="flex items-center justify-between p-2 text-gray-300 hover:text-white hover:bg-gray-600">
            <span> <i class="fas {{$iconClass}}"></i> {{$title}}</span>
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
            </svg>
        </div>
    </div>
    <div x-show="open" @click.away="open = false" class="mt-2 space-y-2">
        {{$slot}}
        <hr>
    </div>
</div>