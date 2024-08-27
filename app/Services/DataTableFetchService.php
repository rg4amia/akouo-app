<?php

namespace App\Services;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Schema;

class DataTableFetchService
{
    public function fetchUser(Request $request, $model) {

        // Initial setup
        $results = $model;
        $tableName = (new User())->getTable();
        $mainTableColumns = Schema::getColumnListing($tableName);
        $totalData = $results->count();
        $totalFiltered = $totalData;

        // Pagination parameters
        $limit = $request->input('length');
        $start = $request->input('start');
        $orderColumn = $request->input('order.0.column');
        $orderDirection = $request->input('order.0.dir');

        if (!empty($searchValue = $request->input('search.value'))) {

            $results = $results->whereLike(['name',
                'email',
                'password',
                'telephone',
                'note',
                'enregistre',
                'indicatif',
                'active',
                'pay_id',
                'cellule_id',
                'type_utilisateur_id',
                'entite_origine_id',
                'status_user_id'
            ], $searchValue);

            $totalFiltered = $results->count();
        }

        // Apply pagination and ordering
        $results = $results->offset($start)
        ->limit($limit)
            ->orderBy($mainTableColumns[$orderColumn], $orderDirection)
            ->get();

        $data = $results->toArray();

        // Prepare JSON response
        $json_data = [
            "draw"            => intval($request->input('draw')),
            "recordsTotal"    => intval($totalData),
            "recordsFiltered" => intval($totalFiltered),
            "data"            => $data
        ];

        return response()->json($json_data);
    }
}
