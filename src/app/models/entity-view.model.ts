export class EntityView {
    rows:object[];
    columns:string[]

    setRows(rows:object[])
    {
        this.rows=rows;
    }

    getRows()
    {
        return this.rows;
    }

    setColumns(columns:string[])
    {
        this.columns=columns
    }

    getViewValue()
    {
        return this.columns;
    }
  }