export class Insert {
    tbname: string;
    data: object;

    setTbName(tbname:string)
    {
        this.tbname=tbname;
    }

    getTbName()
    {
        return this.tbname;
    }

    setData(data:object)
    {
        this.data=data;
    }

    getData()
    {
        return this.data;
    }
  }