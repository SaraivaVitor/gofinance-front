import Chart from "../components/Chart";
import Card from "../components/Card";

import { RightSide } from "../styles/home/home.styles";
import TableNavbar from "../components/TableNavbar";
import TableContainer from "../components/TableContainer";
import TableDetails from "../components/TableDetails";
import TableLine from "../components/TableLine";
import { Container } from "../styles/global";
import { useCallback, useEffect, useState } from "react";
import api from "../services/api";
import { toast } from "react-toastify";
import {
  convertJsonToCsv,
  createUriAndNameToFile,
  downloadFile,
} from "../utils/csv";

const Home = () => {
  const [receiptValue, setReceiptValue] = useState(0);
  const [debitValue, setDebitValue] = useState(0);
  const [receiptTotal, setReceiptTotal] = useState(0);
  const [debitTotal, setDebitTotal] = useState(0);
  const [loading, setLoading] = useState(false);
  const [userId, setUserId] = useState<string | null>();
  const getGraphData = useCallback(async (id: string | null | undefined) => {
    try {
      setLoading(true);
      const debitResponse = await api.get(`/account/graph/${id}/debit`);
      const receiptResponse = await api.get(`/account/graph/${id}/receipt`);
      setReceiptValue(receiptResponse.data);
      setDebitValue(debitResponse.data);
    } catch {
      toast.error("Erro ao buscar dados do gráfico...");
    } finally {
      setLoading(false);
    }
  }, []);
  const getTotalValues = useCallback(async (id: string | null | undefined) => {
    try {
      setLoading(true);
      const debitResponse = await api.get(`/account/reports/${id}/debit`);
      const receiptResponse = await api.get(`/account/reports/${id}/receipt`);
      setReceiptTotal(receiptResponse.data);
      setDebitTotal(debitResponse.data);
    } catch {
      toast.error("Erro ao buscar dados do gráfico...");
    } finally {
      setLoading(false);
    }
  }, []);
  useEffect(() => {
    const user_id = localStorage.getItem("@gofinance:user_id");
    setUserId(user_id);
    getGraphData(user_id);
    getTotalValues(user_id);
  }, [userId, getGraphData, getTotalValues]);
  if (loading) return <div>Carregando...</div>;
  const getPercentage = (value: number, total: number) => {
    const percentage = (value / total) * 100;
    return percentage;
  };
  const formatValue = (value: number) => {
    const formattedValue = value.toLocaleString("pt-br", {
      style: "currency",
      currency: "BRL",
    });
    return formattedValue;
  };
  const graphValueTotal = receiptValue + debitValue;
  const receiptPercentage = getPercentage(receiptValue, graphValueTotal);
  const debitPercentage = getPercentage(debitValue, graphValueTotal);
  const debitTotalValue = formatValue(debitTotal);
  const receiptTotalValue = formatValue(receiptTotal);
  const amount = receiptTotal - debitTotal;
  const totalValue = formatValue(amount);
  const cardData = [
    {
      title: "Saldo a pagar",
      value: debitTotalValue,
    },
    {
      title: "Saldo a receber",
      value: receiptTotalValue,
    },
    {
      title: "Saldo total",
      value: totalValue,
    },
  ];
  const downloadCsv = () => {
    const csvHeaders = ["Saldo a pagar", "Saldo a receber", "Saldo total"];
    const csvFile = convertJsonToCsv(
      { debitTotal, receiptTotal, amount },
      csvHeaders
    );
    const uriAndNameProps = {
      file: csvFile,
      fileName: "Finanças",
      fileType: "csv",
    };
    const uriFile = createUriAndNameToFile(uriAndNameProps);
    downloadFile(uriFile.uri, "Finanças");
  };
  return (
    <Container>
      <Chart receiptValue={receiptPercentage} debitValue={debitPercentage} />
      <RightSide>
        {cardData.map((card) => (
          <Card key={card.title} title={card.title} value={card.value} />
        ))}
        <button onClick={downloadCsv}>Download</button>
      </RightSide>
    </Container>
  );
};

export default Home;
