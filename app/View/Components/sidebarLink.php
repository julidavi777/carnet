<?php

namespace App\View\Components;

use Illuminate\View\Component;

class sidebarLink extends Component
{
    
    public $href; 
    public $iconClass; 
    public $text; 

    public function __construct($href, $iconClass, $text)
    {
        $this->href = $href;
        $this->iconClass = $iconClass;
        $this->text = $text;
    }

    /**
     * Get the view / contents that represent the component.
     *
     * @return \Illuminate\Contracts\View\View|\Closure|string
     */
    public function render()
    {
        return view('components.sidebar.sidebar-link');
    }
}
