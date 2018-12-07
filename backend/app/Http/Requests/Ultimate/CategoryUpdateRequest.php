<?php

namespace App\Http\Requests\Ultimate;

use Illuminate\Foundation\Http\FormRequest;

class CategoryUpdateRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'slug' => 'unique:categories',
            'add_click' => 'boolean',
            'add_hit' => 'boolean',
            'add_sale_value' => 'numeric'
        ];
    }
}
